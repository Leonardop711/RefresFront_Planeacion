import React from 'react';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';
import '../../../styles/Module.css'; // Crearemos este para estilos de tablas

const CargaMetas = () => {
  // Datos de ejemplo (Normalmente vendrían de una API/Laravel)
  const metas = [
    { id: 1, actividad: 'Mantenimiento de Servidores', unidad: 'Porcentaje', meta: '100%', presupuesto: '$45,000' },
    { id: 2, actividad: 'Capacitación Personal', unidad: 'Taller', meta: '5', presupuesto: '$12,000' },
  ];

  return (
    <div className="module-container fadeIn">
      <header className="module-header">
        <div>
          <h2>Carga de Metas - POA</h2>
          <p className="subtitle">Gestión de actividades y metas institucionales</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">
            <Plus size={16} /> Añadir Línea
          </button>
          <button className="btn-primary">
            <Save size={16} /> Guardar Cambios
          </button>
        </div>
      </header>

      <section className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Actividad / Descripción</th>
              <th>Unidad de Medida</th>
              <th>Meta Programada</th>
              <th>Presupuesto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {metas.map((meta) => (
              <tr key={meta.id}>
                <td>{meta.actividad}</td>
                <td><span className="badge">{meta.unidad}</span></td>
                <td><strong>{meta.meta}</strong></td>
                <td>{meta.presupuesto}</td>
                <td className="actions-cell">
                  <button className="action-btn edit"><Edit3 size={14}/></button>
                  <button className="action-btn delete"><Trash2 size={14}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CargaMetas;