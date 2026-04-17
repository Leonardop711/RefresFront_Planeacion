import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon, Target, TrendingUp, BarChart3, LayoutDashboard } from 'lucide-react';
import '../styles/dashboardPlaneacionRe.css';

const DashboardPlaneacionRe = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();

  // Efecto para aplicar el tema al body o contenedor principal
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <header className="top-banner">
        <div className="banner-content">
          <LayoutDashboard className="icon-gold" size={32} />
          <h1>SISTEMA DE PLANEACIÓN</h1>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span>{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>
        </button>
      </header>

      <main className="cards-grid">
        <section className="nav-card">
          <div className="card-icon-wrapper">
            <Target size={40} strokeWidth={1.5} />
          </div>
          <h3>Planeación Estratégica</h3>
          <p>Definición de objetivos y metas a largo plazo.</p>
          <button className="card-btn">Explorar Área</button>
        </section>

        <section className="nav-card">
          <div className="card-icon-wrapper">
            <TrendingUp size={40} strokeWidth={1.5} />
          </div>
          <h3>Inversión Pública</h3>
          <p>Gestión de presupuestos y recursos del estado.</p>
          <button className="card-btn">Explorar Área</button>
        </section>

        <section className="nav-card">
          <div className="card-icon-wrapper">
            <BarChart3 size={40} strokeWidth={1.5} />
          </div>
          <h3>Dirección de Seguimiento y Evaluación</h3>
          <p>Monitoreo de indicadores y resultados de gestión.</p>
          <button className="card-btn" onClick={() =>navigate('/seguimiento')}>Explorar Área</button>
        </section>
      </main>
    </div>
  );
};

export default DashboardPlaneacionRe;