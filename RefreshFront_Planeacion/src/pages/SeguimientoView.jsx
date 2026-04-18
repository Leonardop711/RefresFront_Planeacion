import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import { INSTITUCIONES_CONFIG } from '../config/menuConfig.jsx';
import CargaMetas from './modules/CargaMetas.jsx';
import '../styles/SeguimientoView.css';

const SeguimientoView = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const [activeModule, setActiveModule] = useState('welcome');

  // Extraemos la configuración específica
  const config = INSTITUCIONES_CONFIG.seguimiento;
  const user = {name: "Usuario Admin", email: "Seguimiento@gmail.tuxtla.com"};

  // Función para renderizar el contenido dinámicamente
  const renderModule = () => {
    switch (activeModule) {
      case 'Carga de Metas':
        return <CargaMetas />;
      case 'Revisiones':
        return <div className="glass-card"><h2>Vista de Revisiones en desarrollo...</h2></div>;
      default:
        return (
          <div className="glass-card">
            <h2>Bienvenido al sistema</h2>
            <p>Selecciona una opción del menú para comenzar.</p>
          </div>
        );
    }
  };

  return (
    <div className={`seguimiento-layout ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
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
          {renderModule()}
        </section>
      </main>
    </div>
  );
};

export default SeguimientoView;