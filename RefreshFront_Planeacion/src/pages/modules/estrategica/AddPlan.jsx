import React, { useState, useMemo } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { Send, Plus, Trash2 } from 'lucide-react';

const AddPlan = ({ color }) => {
  const [formData, setFormData] = useState({
    eje: '', tema: '', politica: '', objetivo: '', estrategias: ''
  });
  
  const [records, setRecords] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addToList = (e) => {
    e.preventDefault();
    if (!formData.eje || !formData.objetivo) return;
    setRecords([...records, { ...formData, id: Date.now() }]);
    setFormData({ eje: '', tema: '', politica: '', objetivo: '', estrategias: '' });
  };

  // Definición de columnas para TanStack v8
  const columns = useMemo(() => [
    { header: 'Eje', accessorKey: 'eje' },
    { header: 'Objetivo', accessorKey: 'objetivo' },
    { header: 'Política Pública', accessorKey: 'politica' },
    {
      header: 'Acciones',
      id: 'actions',
      cell: ({ row }) => (
        <button 
          onClick={() => setRecords(prev => prev.filter(r => r.id !== row.original.id))} 
          className="delete-row-btn"
        >
          <Trash2 size={16} />
        </button>
      )
    }
  ], []);

  // Inicialización de la tabla v8
  const table = useReactTable({
    data: records,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="add-plan-container">
      <div className="glass-card form-section">
        <h3 style={{ color }}>Nuevo Registro Estratégico</h3>
        <form className="dynamic-form" onSubmit={addToList}>
          <div className="form-grid">
            <div className="input-group">
              <label>Eje:</label>
              <input name="eje" value={formData.eje} onChange={handleInputChange} placeholder="Ej. Eje 1..." />
            </div>
            <div className="input-group">
              <label>Tema:</label>
              <input name="tema" value={formData.tema} onChange={handleInputChange} placeholder="Ej. Finanzas..." />
            </div>
            <div className="input-group full-width">
              <label>Política Pública:</label>
              <input name="politica" value={formData.politica} onChange={handleInputChange} />
            </div>
            <div className="input-group full-width">
              <label>Objetivo:</label>
              <textarea name="objetivo" value={formData.objetivo} onChange={handleInputChange} rows="2" />
            </div>
            <div className="input-group full-width">
              <label>Estrategias:</label>
              <textarea name="estrategias" value={formData.estrategias} onChange={handleInputChange} rows="2" />
            </div>
          </div>
          <button type="submit" className="add-btn" style={{ backgroundColor: color }}>
            <Plus size={18} /> Agregar a la lista
          </button>
        </form>
      </div>

      {records.length > 0 && (
        <div className="glass-card table-section">
          <h4>Previsualización de Envío</h4>
          <table className="custom-table">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          
          <button className="send-final-btn" onClick={() => alert("Enviado a Seguimiento")}>
            <Send size={18} /> Enviar todo a Seguimiento
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPlan;