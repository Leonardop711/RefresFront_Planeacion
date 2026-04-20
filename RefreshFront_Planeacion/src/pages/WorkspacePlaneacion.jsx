import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { INSTITUCIONES_CONFIG } from '../config/menuConfig';
import CargaMetas from './modules/CargaMetas'; 
import '../styles/WorkspacePlaneacion.css';

// Recibimos el usuario, pero si no llega (undefined), no pasa nada
const WorkspacePlaneacion = ({ user: initialUser }) => {
  
  // EL SALVAVIDAS: Si initialUser no existe, forzamos uno de prueba.
  const [user, setUser] = useState(initialUser || { 
    name: "Usuario Prueba", 
    email: "prueba@unach.mx", 
    area: "seguimiento" 
  });

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeModule, setActiveModule] = useState('welcome');

  // Buscamos la configuración basándonos en el área seleccionada
  const config = INSTITUCIONES_CONFIG[user.area];

  // Si aún así no hay config, mostramos un error elegante en lugar de romper la pantalla
  if (!config) {
    return (
      <div style={{ padding: '50px', color: 'white', background: '#111', height: '100vh' }}>
        <h2>Error: El área "{user.area}" no existe en menuConfig.jsx</h2>
      </div>
    );
  }

  return (
    <div className="seguimiento-layout">
      
      {/* 🛠️ PANEL DE PROTOTIPO 🛠️ */}
      <div style={{
        position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
        background: '#1a1a1c', padding: '15px', borderRadius: '12px', 
        border: `2px solid ${config.color}`, boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
      }}>
        <p style={{ fontSize: '11px', color: '#aaa', margin: '0 0 8px 0', fontWeight: 'bold' }}>
          CAMBIAR ROL (PRUEBA)
        </p>
        <select 
          onChange={(e) => {
            // Actualizamos el área y reiniciamos el módulo al cambiar de rol
            setUser({ ...user, area: e.target.value });
            setActiveModule('welcome');
            setOpenMenu(null);
          }}
          value={user.area}
          style={{ 
            background: '#000', color: '#fff', border: '1px solid #333', 
            padding: '8px', borderRadius: '6px', cursor: 'pointer', outline: 'none'
          }}
        >
          <option value="seguimiento">Seguimiento (Dorado)</option>
          <option value="inversion">Inversión (Azul)</option>
          <option value="estrategica">Estratégica (Verde)</option>
        </select>
      </div>
      {/* ------------------------------------------------ */}

      <Sidebar 
        config={config} 
        user={user} 
        isCollapsed={isCollapsed} 
        toggleSidebar={() => setIsCollapsed(!isCollapsed)}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        onModuleChange={(name) => setActiveModule(name)} 
      />

      <main className="content-area">
        <header className="content-header">
          <h2>Panel de {config.nombreArea}</h2>
        </header>
        
        <section className="main-display">
          {activeModule === 'Carga de Metas' ? (
            <CargaMetas />
          ) : (
            <div className="glass-card">
              <h2 style={{ color: config.color }}>Vista de {config.nombreArea}</h2>
              <p>Cambia el rol en el panel flotante de arriba a la derecha para ver cómo el menú lateral y los colores se adaptan a la credencial del usuario.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default WorkspacePlaneacion;