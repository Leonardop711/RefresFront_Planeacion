import React from 'react';
import { FileText, BarChart2, ClipboardList, Flag, Bell } from 'lucide-react';

// Usamos exportación nombrada (named export)
export const INSTITUCIONES_CONFIG = {
  seguimiento: {
    nombreArea: "Seguimiento y Eval.",
    color: "#D4AF37",
    botones: [
      { 
        id: 'poa', 
        label: 'POA', 
        icon: <FileText size={20}/>, 
        sub: [{ label: 'Carga de Metas', path: '/poa' }, { label: 'Revisiones', path: '/rev' }] 
      },
      { 
        id: 'ind', 
        label: 'Indicadores', 
        icon: <BarChart2 size={20}/>, 
        sub: [{ label: 'Estratégicos', path: '/ind' }] 
      },
      { id: 'inf', label: 'Informes', icon: <ClipboardList size={20}/>, sub: [{ label: 'Trimestrales', path: '/inf' }] },
      { id: 'rep', label: 'Reportes', icon: <Flag size={20}/>, sub: [{ label: 'Generar PDF', path: '/pdf' }] },
      { id: 'not', label: 'Notificaciones', icon: <Bell size={20}/>, sub: [{ label: 'Bandeja', path: '/mail' }] },
    ]
  }
};