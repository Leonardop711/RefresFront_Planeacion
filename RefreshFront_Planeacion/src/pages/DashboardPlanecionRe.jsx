import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, TrendingUp, BarChart3, LayoutDashboard, Lock } from 'lucide-react';
import '../styles/DashboardPlaneacionRe.css';

const DashboardPlaneacionRe = ({ user }) => {
  const navigate = useNavigate();

  // Verificamos a qué área tiene acceso el usuario actual
  // Si el área es "todas" (para un super admin de planeación), le damos acceso a todo.
  const hasAccess = (areaRequerida) => {
    return user?.area === areaRequerida || user?.area === 'todas';
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
            onClick={() => navigate('/workspace')}
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
            onClick={() => navigate('/workspace')}
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
            onClick={() => navigate('/workspace')}
          >
            {hasAccess('seguimiento') ? 'Explorar Área' : 'Acceso Denegado'}
          </button>
        </section>
      </main>
    </div>
  );
};

export default DashboardPlaneacionRe;