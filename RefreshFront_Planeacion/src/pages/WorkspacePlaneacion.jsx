import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { INSTITUCIONES_CONFIG } from '../config/menuConfig';
import CargaMetas from './modules/seguimiento/CargaMetas';
import CarteraProyectos from './modules/inversion/CarteraPro';
import AddPlan from './modules/estrategica/AddPlan';
import '../styles/WorkspacePlaneacion.css';

const WorkspacePlaneacion = ({ user, area, onBack }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  // 1. PERSISTENCIA DEL MÓDULO (Sobrevive al F5)
  // Guardamos el módulo usando el nombre del área para no mezclarlos
  const [activeModule, setActiveModule] = useState(() => {
    return localStorage.getItem(`active_module_${area}`) || 'welcome';
  });

  const config = INSTITUCIONES_CONFIG[area];

  // 2. FUNCIÓN PARA CAMBIAR Y GUARDAR
  const handleModuleChange = (name) => {
    setActiveModule(name);
    localStorage.setItem(`active_module_${area}`, name);
  };

  const renderModule = () => {
    // 3. SWITCH MEJORADO
    switch (activeModule) {
      case 'Carga de Metas': return <CargaMetas />;
      case 'Cartera de Proyectos': return <CarteraProyectos />;
      case 'Añadir Plan': return <AddPlan/>
      case 'welcome':
        return (
          <div className="glass-card welcome-container">
            <h2 style={{ color: config?.color }}>Panel de {config?.nombreArea}</h2>
            <p>Bienvenido, <strong>{user?.name || "Usuario"}</strong>.</p>
            <p>Selecciona una opción del menú lateral para comenzar.</p>
          </div>
        );
      default:
        // COMODÍN: Si haces clic en algo que no tiene componente aún, verás esto
        return (
          <div className="glass-card welcome-container">
            <h2 style={{ color: config?.color }}>{activeModule}</h2>
            <p>El componente para este módulo está en desarrollo.</p>
          </div>
        );
    }
  };

  if (!user) return <div className="error-screen">No hay sesión activa.</div>;

  return (
    <div className="seguimiento-layout">
      {/* MAGIA CSS: Inyectamos el color para el hover del botón */}
      <style>
        {`
          .back-btn:hover {
            border-color: ${config?.color};
            color: ${config?.color};
          }
        `}
      </style>

      <Sidebar 
        config={config} 
        user={user} 
        isCollapsed={isCollapsed} 
        toggleSidebar={() => setIsCollapsed(!isCollapsed)}
        onModuleChange={handleModuleChange} // Usamos nuestra nueva función
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <main className="content-area">
        <header className="content-header">
          <div className="header-left">
            <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={20} />
            </button>
            <h2>{config?.nombreArea}</h2>
          </div>
        </header>
        <section className="main-display">
          {renderModule()}
        </section>
      </main>
    </div>
  );
};

export default WorkspacePlaneacion;