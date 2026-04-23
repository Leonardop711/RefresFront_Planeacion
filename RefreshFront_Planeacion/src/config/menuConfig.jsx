import React from 'react';
import { FileText, BarChart2, ClipboardList, Flag, Bell, Briefcase, Wallet, Target, Map } from 'lucide-react';

export const INSTITUCIONES_CONFIG = {

    // 🟢 CREDENCIAL: planeacion@sistema.com
  estrategica: {
    nombreArea: "Planeación Estratégica",
    color: "#2ecc71", // Verde esmeralda (para distinguirlo del Dorado)
    botones: [
      { 
        id: 'Añadir Plan', 
        label: 'Añadir Plan', 
        icon: <Map size={20} strokeWidth={1.5} />, 
      },
    ]
  },


  // 🔵 CREDENCIAL: inversion@sistema.com
  inversion: {
    nombreArea: "Inversión Pública",
    color: "#3498db", // Azul corporativo
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
  },


  
  // 🟡 CREDENCIAL: seguimiento@sistema.com
  seguimiento: {
    nombreArea: "Seguimiento y Evaluación",
    color: "#D4AF37", // Dorado
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
  }
};