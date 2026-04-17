import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { INSTITUCIONES_CONFIG } from '../config/menuConfig'; 
import '../styles/SeguimientoView.css';

const SeguimientoView = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  // Extraemos la configuración específica
  const currentConfig = INSTITUCIONES_CONFIG.seguimiento;
  
  const currentUser = {
    name: "Usuario Admin",
    email: "admin@unach.mx"
  };

  return (
    <div className={`seguimiento-layout ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar 
        config={currentConfig}
        user={currentUser}
        isCollapsed={isCollapsed}
        toggleSidebar={() => setIsCollapsed(!isCollapsed)}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <main className="content-area">
        <header className="content-header">
          <h2>Panel de {currentConfig.nombreArea}</h2>
        </header>

        <section className="main-display">
          <div className="glass-card">
            <p>Bienvenido al sistema. Selecciona una opción del menú para comenzar.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SeguimientoView;