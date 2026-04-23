// src/views/DashboardPlaneacion.jsx
import React, { useState } from 'react';
import { Target, TrendingUp, BarChart3, LayoutDashboard, Lock } from 'lucide-react';
import WorkspacePlaneacion from './WorkspacePlaneacion'; // Importamos el Workspace
import '../styles/DashboardPlaneacionRe.css';

const DashboardPlaneacion = ({ user }) => {
  // ESTADO CLAVE: Controla qué área estamos viendo. 
  // Si es null, vemos el menú de tarjetas. Si tiene un string, vemos el Workspace.
  const [selectedArea, setSelectedArea] = useState(() => {
    return localStorage.getItem("user_activate_area") || null;
  });

  // Mapeo estricto por correo electrónico
  const determinarAreaPermitida = (usuario) => {
    if (!usuario) return null;
    if (usuario.rol === 'admin' || usuario.email === 'admin@sistema.com') return 'todas';

    switch (usuario.email) {
      case 'planeacion@sistema.com': return 'estrategica';
      case 'inversion@sistema.com': return 'inversion';
      case 'seguimiento@sistema.com': return 'seguimiento';
      default: return usuario.area || null; 
    }
  };

  const areaAsignada = determinarAreaPermitida(user);

  const hasAccess = (areaRequerida) => {
    return areaAsignada === areaRequerida || areaAsignada === 'todas';
  };

const handleSelection = (areaTarget) => {
  setSelectedArea(areaTarget);
  localStorage.setItem("user_active_area", areaTarget);
  localStorage.setItem(`active_module_${areaTarget}`, 'welcome');
};

  // 🔥 RENDERIZADO CONDICIONAL 🔥
  // Si el usuario ya seleccionó un área, ocultamos las tarjetas y mostramos el Workspace
  if (selectedArea) {
    return (
      <WorkspacePlaneacion 
        user={user} 
        area={selectedArea} 
        onBack={() => {
          setSelectedArea(null);
          localStorage.removeItem("user_active_area");
        }}
      />
    );
  }

  // Si selectedArea es null, mostramos las tarjetas normalmente
  return (
    <div className="dashboard-container dark-theme">
      <header className="top-banner">
        <div className="banner-content">
          <LayoutDashboard className="icon-gold" size={32} />
          <h1>SISTEMA DE PLANEACIÓN</h1>
        </div>
      </header>

      <main className="cards-grid">
        <section className={`nav-card ${!hasAccess('estrategica') ? 'locked' : ''}`}>
          {!hasAccess('estrategica') && <Lock className="lock-icon" size={24} />}
          <div className="card-icon-wrapper"><Target size={40} strokeWidth={1.5} /></div>
          <h3>Planeación Estratégica</h3>
          <p>Definición de objetivos y metas a largo plazo.</p>
          <button 
            className="card-btn" 
            disabled={!hasAccess('estrategica')}
            onClick={() => handleSelection('estrategica')}
          >
            {hasAccess('estrategica') ? 'Explorar Área' : 'Acceso Denegado'}
          </button>
        </section>

        <section className={`nav-card ${!hasAccess('inversion') ? 'locked' : ''}`}>
          {!hasAccess('inversion') && <Lock className="lock-icon" size={24} />}
          <div className="card-icon-wrapper"><TrendingUp size={40} strokeWidth={1.5} /></div>
          <h3>Inversión Pública</h3>
          <p>Gestión de presupuestos y recursos del estado.</p>
          <button 
            className="card-btn"
            disabled={!hasAccess('inversion')}
            onClick={() => handleSelection('inversion')}
          >
            {hasAccess('inversion') ? 'Explorar Área' : 'Acceso Denegado'}
          </button>
        </section>

        <section className={`nav-card ${!hasAccess('seguimiento') ? 'locked' : ''}`}>
          {!hasAccess('seguimiento') && <Lock className="lock-icon" size={24} />}
          <div className="card-icon-wrapper"><BarChart3 size={40} strokeWidth={1.5} /></div>
          <h3>Seguimiento y Evaluación</h3>
          <p>Monitoreo de indicadores y resultados de gestión.</p>
          <button 
            className="card-btn"
            disabled={!hasAccess('seguimiento')}
            onClick={() => handleSelection('seguimiento')}
          >
            {hasAccess('seguimiento') ? 'Explorar Área' : 'Acceso Denegado'}
          </button>
        </section>
      </main>
    </div>
  );
};

export default DashboardPlaneacion;