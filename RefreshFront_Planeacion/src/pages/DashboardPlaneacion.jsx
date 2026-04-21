// src/views/DashboardPlaneacion.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, TrendingUp, BarChart3, LayoutDashboard, Lock } from 'lucide-react';
import '../styles/DashboardPlaneacionRe.css';

const DashboardPlaneacion = ({ user }) => {
  const navigate = useNavigate();

  // Ahora el console.log debería mostrarte los datos correctamente
  console.log("Usuario en Dashboard de Selección:", user);

  const hasAccess = (areaRequerida) => {
    return user?.area === areaRequerida || user?.area === 'todas';
  };

  const handleSelection = (areaTarget) => {
    localStorage.setItem("user_active_area", areaTarget);
    navigate('/workspace'); // Ruta absoluta
  };

  return (
    <div className="dashboard-container dark-theme">
      <header className="top-banner">
        <div className="banner-content">
          <LayoutDashboard className="icon-gold" size={32} />
          <h1>SISTEMA DE PLANEACIÓN</h1>
        </div>
      </header>

      <main className="cards-grid">
        {/* TARJETA 1: PLANEACIÓN ESTRATÉGICA */}
        <section className={`nav-card ${!hasAccess('estrategica') ? 'locked' : ''}`}>
          {!hasAccess('estrategica') && <Lock className="lock-icon" size={24} />}
          <div className="card-icon-wrapper">
            <Target size={40} strokeWidth={1.5} />
          </div>
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

        {/* TARJETA 2: INVERSIÓN PÚBLICA */}
        <section className={`nav-card ${!hasAccess('inversion') ? 'locked' : ''}`}>
          {!hasAccess('inversion') && <Lock className="lock-icon" size={24} />}
          <div className="card-icon-wrapper">
            <TrendingUp size={40} strokeWidth={1.5} />
          </div>
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

        {/* TARJETA 3: SEGUIMIENTO Y EVALUACIÓN */}
        <section className={`nav-card ${!hasAccess('seguimiento') ? 'locked' : ''}`}>
          {!hasAccess('seguimiento') && <Lock className="lock-icon" size={24} />}
          <div className="card-icon-wrapper">
            <BarChart3 size={40} strokeWidth={1.5} />
          </div>
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