import React, { useState } from 'react';
import { 
  ChevronDown, User, LayoutGrid, LogOut, 
  Menu, Settings, Bell, ChevronRight 
} from 'lucide-react';

const Sidebar = ({ config, user, isCollapsed, toggleSidebar, openMenu, setOpenMenu }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  if (!config) return null;

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      
      {/* HEADER CON HAMBURGUESA */}
      <div className="sidebar-header">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        {!isCollapsed && <span className="brand-name" style={{ color: config.color }}>UNACH</span>}
      </div>

      {/* TARJETA DE USUARIO CON DROPDOWN */}
      <div className="user-section">
        <div 
          className={`user-profile-card ${isUserMenuOpen ? 'active' : ''}`}
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        >
          <div className="avatar" style={{ backgroundColor: config.color }}>
            <User size={20} color="#000" />
          </div>
          
          <div className="user-details">
            <span className="username">{user.name}</span>
            <span className="area-tag" style={{ color: config.color }}>{config.nombreArea}</span>
          </div>
          
          {!isCollapsed && <ChevronDown size={14} className={`user-arrow ${isUserMenuOpen ? 'rotate' : ''}`} />}
        </div>

        {/* MENÚ DESPLEGABLE DE USUARIO (LOGOUT) */}
        {isUserMenuOpen && (
          <div className={`user-dropdown ${isCollapsed ? 'is-floating' : ''}`}>
            <button className="dropdown-item">
              <Settings size={16} /> {!isCollapsed && "Configuración"}
            </button>
            <button className="dropdown-item logout">
              <LogOut size={16} /> {!isCollapsed && "Cerrar Sesión"}
            </button>
          </div>
        )}
      </div>

      <div className="divider" />

      {/* NAVEGACIÓN */}
      <nav className="sidebar-nav">
        {config.botones.map((item) => (
          <div key={item.id} className="menu-group">
            <button 
              className={`menu-trigger ${openMenu === item.id ? 'active' : ''}`}
              onClick={() => !isCollapsed && setOpenMenu(openMenu === item.id ? null : item.id)}
              title={isCollapsed ? item.label : ""}
            >
              <div className="trigger-content">
                <span className="icon-wrapper">{item.icon}</span>
                <span className="label-text">{item.label}</span>
              </div>
              {!isCollapsed && (
                <ChevronRight className={`arrow ${openMenu === item.id ? 'rotate' : ''}`} size={14} />
              )}
            </button>
            
            {!isCollapsed && openMenu === item.id && (
              <div className="submenu show">
                {item.sub.map((subItem, index) => (
                  <a href="#" key={index} className="submenu-item">
                    {subItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;