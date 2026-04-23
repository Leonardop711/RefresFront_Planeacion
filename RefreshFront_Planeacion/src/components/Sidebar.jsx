import React, { useState } from 'react';
import { ChevronDown, User, LogOut, Menu, ChevronRight } from 'lucide-react';
import '../styles/Sidebard.css';

const Sidebar = ({ config, user, isCollapsed, toggleSidebar, openMenu, setOpenMenu, onModuleChange }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  if (!config) return null;

  const sidebarStyle = {
    '--dynamic-color': config.color
  };

  const brandTitle = config.nombreArea.split(' ')[0].toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_active_area");
    window.location.href = "/";
  };

  return (
    <aside className={`sidebar-component ${isCollapsed ? 'collapsed' : ''}`} style={sidebarStyle}>
      {/* HEADER: Logo + Hamburguesa */}
      <div className="sidebar-header">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        {!isCollapsed && <div className="brand-name" style={{ color: 'var(--dynamic-color)' }}>{brandTitle}</div>}
      </div>

      {/* SECCIÓN DE USUARIO */}
      <div className="user-section">
        <div
          className={`user-profile-card ${isUserMenuOpen ? 'active' : ''}`}
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        >
          <div className="avatar" style={{ backgroundColor: 'var(--dynamic-color)' }}>
            <User size={20} color="#000" />
          </div>
          {!isCollapsed && (
            <div className="user-info">
              <span className="username">{user?.name || user?.email?.split('@')[0]}</span>
              <span className="area-tag" style={{ color: 'var(--dynamic-color)' }}>{config.nombreArea}</span>
            </div>
          )}
          {!isCollapsed && (
            <ChevronDown size={14} className={`user-arrow ${isUserMenuOpen ? 'rotate' : ''}`} />
          )}
        </div>

        {isUserMenuOpen && (
          <div className={`user-dropdown ${isCollapsed ? 'floating' : ''}`}>
            <button className="dropdown-item logout-action" onClick={handleLogout}>
              <LogOut size={16} /> {!isCollapsed && "Cerrar Sesión"}
            </button>
          </div>
        )}
      </div>

      <div className="sidebar-divider" />

      {/* NAVEGACIÓN DINÁMICA MEJORADA */}
      <nav className="sidebar-nav">
        <div className="nav-container">
          {config.botones.map((item) => {
            // Verificamos si este botón tiene submenú
            const hasSubmenu = item.sub && item.sub.length > 0;

            return (
              <div key={item.id} className="menu-group">
                <button
                  className={`menu-trigger ${openMenu === item.id ? 'active' : ''}`}
                  onClick={() => {
                    if (isCollapsed) return;

                    if (hasSubmenu) {
                      // CASO A: Tiene submenú -> Toggle de apertura
                      setOpenMenu(openMenu === item.id ? null : item.id);
                    } else {
                      // CASO B: Es acción directa (Como "Añadir Plan") -> Renderiza módulo 🚀
                      onModuleChange(item.label);
                      setOpenMenu(null); // Cerramos otros menús abiertos por limpieza
                    }
                  }}
                >
                  <div className="trigger-content">
                    <div className="icon-box">{item.icon}</div>
                    <span className="label-text">{item.label}</span>
                  </div>
                  
                  {/* Solo mostramos la flecha si realmente hay algo que desplegar */}
                  {!isCollapsed && hasSubmenu && (
                    <ChevronRight className={`arrow ${openMenu === item.id ? 'rotate' : ''}`} size={14} />
                  )}
                </button>

                {/* Submenú renderizado condicionalmente */}
                {!isCollapsed && hasSubmenu && openMenu === item.id && (
                  <div className="submenu show">
                    {item.sub.map((sub, i) => (
                      <a 
                        href="#" 
                        key={i} 
                        className="submenu-item" 
                        onClick={(e) => {
                          e.preventDefault();
                          onModuleChange(sub.label);
                        }}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;