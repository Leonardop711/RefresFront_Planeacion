import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { INSTITUCIONES_CONFIG } from '../config/menuConfig';
import CargaMetas from './modules/seguimiento/CargaMetas';
import CarteraProyectos from './modules/inversion/CarteraPro';
import '../styles/WorkspacePlaneacion.css';

const WorkspacePlaneacion = ({ user }) => {
  const navigate = useNavigate();
  
  // Solo mantenemos la persistencia del área que se clickeó para no perder el color
  const [currentArea] = useState(localStorage.getItem("user_active_area") || "seguimiento");

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeModule, setActiveModule] = useState('welcome');

  const config = INSTITUCIONES_CONFIG[currentArea];

  const renderModule = () => {
    switch (activeModule) {
      case 'Carga de Metas': return <CargaMetas />;
      case 'Cartera de Proyectos': return <CarteraProyectos />;
      default:
        return (
          <div className="glass-card welcome-container">
            <h2 style={{ color: config?.color }}>Panel de {config?.nombreArea}</h2>
            <p>Bienvenido, <strong>{user?.name || "Usuario"}</strong>.</p>
            <p>Selecciona una opción del menú lateral para comenzar.</p>
          </div>
        );
    }
  };

  // Si por alguna razón el usuario entra directo a la URL sin loguearse
  if (!user) {
    return <div className="error-screen">No hay sesión activa. Redirigiendo...</div>;
  }

  return (
    <div className="seguimiento-layout">
      <Sidebar 
        config={config} 
        user={user} 
        isCollapsed={isCollapsed} 
        toggleSidebar={() => setIsCollapsed(!isCollapsed)}
        onModuleChange={(name) => setActiveModule(name)} 
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <main className="content-area">
        <header className="content-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => navigate('/dashboard')}><ArrowLeft size={20} /></button>
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