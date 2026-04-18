import React, { useState } from 'react';
import { ChevronDown, User, LayoutGrid, LogOut, Menu, ChevronRight } from 'lucide-react';
import '../styles/Sidebard.css';

const Sidebar = ({ config, user, isCollapsed, toggleSidebar, openMenu, setOpenMenu, onModuleChange }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  if (!config) return null;

  return (
    <aside className={`sidebar-component ${isCollapsed ? 'collapsed' : ''}`}>
      {/* HEADER: Logo + Hamburguesa */}
      <div className="sidebar-header">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        {!isCollapsed && <span className="brand-name" style={{ color: config.color }}>SEGUIMIENTO</span>}
      </div>

      {/* SECCIÓN DE USUARIO: Card + Dropdown */}
      <div className="user-section">
        <div
          className={`user-profile-card ${isUserMenuOpen ? 'active' : ''}`}
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        >
          <div className="avatar" style={{ backgroundColor: config.color }}>
            <User size={20} color="#000" />
          </div>
          {!isCollapsed && (
            <div className="user-info">
              <span className="username">{user.name}</span>
              <span className="area-tag" style={{ color: config.color }}>{config.nombreArea}</span>
            </div>
          )}
          {!isCollapsed && (
            <ChevronDown size={14} className={`user-arrow ${isUserMenuOpen ? 'rotate' : ''}`} />
          )}
        </div>

        {isUserMenuOpen && (
          <div className={`user-dropdown ${isCollapsed ? 'floating' : ''}`}>
            <button className="dropdown-item logout-action">
              <LogOut size={16} /> {!isCollapsed && "Cerrar Sesión"}
            </button>
          </div>
        )}
      </div>

      <div className="sidebar-divider" />

      {/* NAVEGACIÓN DINÁMICA */}
      <nav className="sidebar-nav">
        <div className="nav-container"> {/* Contenedor interno para el scroll */}
          {config.botones.map((item) => (
            <div key={item.id} className="menu-group">
              <button
                className={`menu-trigger ${openMenu === item.id ? 'active' : ''}`}
                onClick={() => !isCollapsed && setOpenMenu(openMenu === item.id ? null : item.id)}
              >
                <div className="trigger-content">
                  <div className="icon-box">{item.icon}</div>
                  <span className="label-text">{item.label}</span>
                </div>
                {!isCollapsed && <ChevronRight className={`arrow ${openMenu === item.id ? 'rotate' : ''}`} size={14} />}
              </button>

              {!isCollapsed && openMenu === item.id && (
                <div className="submenu show">
                  {item.sub.map((sub, i) => (
                    <a href="#" key={i} className="submenu-item" onClick={(e) => {
                      e.preventDefault();
                      onModuleChange(sub.label);
                    }}>
                      <span className="submenu-dot"></span>
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;