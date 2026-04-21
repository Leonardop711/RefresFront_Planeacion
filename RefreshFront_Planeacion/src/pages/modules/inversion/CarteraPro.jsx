// src/views/modules/CarteraProyectos.jsx
import React from 'react';
import { Plus, FolderOpen, CheckCircle, Clock } from 'lucide-react';
import '../../../styles/Module.css'; 

const CarteraProyectos = () => {
  // Datos listos para cuando conectes tu backend en Laravel
  const proyectos = [
    { id: 'INV-001', nombre: 'Construcción Laboratorio IA', estado: 'Aprobado', monto: '$2,500,000' },
    { id: 'INV-002', nombre: 'Renovación de Servidores Centrales', estado: 'En Revisión', monto: '$850,000' },
  ];

  return (
    <div className="module-container fadeIn">
      <header className="module-header">
        <div>
          <h2 style={{ color: '#3498db' }}>Cartera de Proyectos</h2>
          <p className="subtitle">Gestión de proyectos de inversión institucional</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">
            <FolderOpen size={16} /> Importar Excel
          </button>
          <button className="btn-primary" style={{ background: '#3498db', color: '#fff' }}>
            <Plus size={16} /> Nuevo Proyecto
          </button>
        </div>
      </header>

      <section className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Folio</th>
              <th>Nombre del Proyecto</th>
              <th>Estado</th>
              <th>Monto Asignado</th>
            </tr>
          </thead>
          <tbody>
            {proyectos.map((proy) => (
              <tr key={proy.id}>
                <td><strong>{proy.id}</strong></td>
                <td>{proy.nombre}</td>
                <td>
                  <span className="badge" style={{ 
                    color: proy.estado === 'Aprobado' ? '#2ecc71' : '#f39c12',
                    background: proy.estado === 'Aprobado' ? 'rgba(46, 204, 113, 0.1)' : 'rgba(243, 156, 18, 0.1)'
                  }}>
                    {proy.estado === 'Aprobado' ? <CheckCircle size={12} style={{marginRight: '4px', verticalAlign: 'middle'}}/> : <Clock size={12} style={{marginRight: '4px', verticalAlign: 'middle'}}/>}
                    {proy.estado}
                  </span>
                </td>
                <td>{proy.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CarteraProyectos;