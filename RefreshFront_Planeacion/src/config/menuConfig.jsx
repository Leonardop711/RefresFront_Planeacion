import React from 'react';
import { FileText, BarChart2, ClipboardList, Flag, Bell, Briefcase, Wallet } from 'lucide-react';

export const INSTITUCIONES_CONFIG = {
  seguimiento: {
    nombreArea: "Seguimiento y Evaluación",
    color: "#D4AF37", //Dorado
    botones: [
      { 
        id: 'poa', 
        label: 'POA', 
        icon: <FileText size={20} strokeWidth={1.5} />, 
        sub: [{ label: 'Carga de Metas', path: '/poa' }, { label: 'Revisiones', path: '/rev' }] 
      },
      { 
        id: 'ind', 
        label: 'Indicadores', 
        icon: <BarChart2 size={20} strokeWidth={1.5} />, 
        sub: [{ label: 'Estratégicos', path: '/ind' }] 
      },
      { id: 'inf', label: 'Informes', icon: <ClipboardList size={20} strokeWidth={1.5} />, sub: [{ label: 'Trimestrales', path: '/inf' }] },
      { id: 'rep', label: 'Reportes', icon: <Flag size={20} strokeWidth={1.5} />, sub: [{ label: 'Generar PDF', path: '/pdf' }] },
      { id: 'not', label: 'Notificaciones', icon: <Bell size={20} strokeWidth={1.5} />, sub: [{ label: 'Bandeja', path: '/mail' }] },
    ]
  },
  estrategica: {
    nombreArea:"Planeacion Estrategica",
    color: "#D4AF37", //Dorado
    botones: [
      { 
        id: 'anadir', 
        label: 'Añadir Plan', 
        icon: <FileText size={20} strokeWidth={1.5} />, 
        sub: [{ label: 'Carga de Metas', path: '/poa' }, { label: 'Revisiones', path: '/rev' }] 
      },
    ]
  },
    inversion: {
    nombreArea:"Inversion Publica",
    color: "#3498db", //Dorado
    botones: [
      { 
        id: 'proyectos', 
        label: 'Proyectos', 
        icon: <Briefcase size={20} strokeWidth={1.5} />, 
        sub: [
          { label: 'Cartera de Proyectos', path: '/cartera'},
          { label: 'Fichas Técnicas', path: '/fichas'}
        ]
      },
      {
        id: 'presupuesto',
        label: 'Presupuesto',
        icon: <Wallet size={20} strokeWidth={1.5} />,
        sub: [
          { label: 'Techos Financieros', path: '/techos' }
        ]
      }
    ]
  }
};