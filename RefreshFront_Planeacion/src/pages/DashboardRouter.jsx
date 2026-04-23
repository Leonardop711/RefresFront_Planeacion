import { useEffect, useState } from "react"
import DashboardDependencias from "./DashboardDependencias"
import DashboardPlaneacion from "./DashboardPlaneacion" // Este es el selector de tarjetas (Strategic, Inversion, Seguimiento)
import DashboardAdmin from "./DashboardAdmin"

export default function DashboardRouter() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      setLoading(false)
      return
    }

    fetch("https://sistema-planeacion-production.up.railway.app/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Sesión inválida")
        return res.json()
      })
      .then(data => {
        console.log("DATA DEL USUARIO:", data)
        setUser(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error en autenticación:", err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando información del sistema...</p>
  if (!user) return <p>No autorizado - Inicia sesión nuevamente</p>

  // LÓGICA DE RENDERIZADO POR ROLES
  
  // 1. Dependencias: Vista simplificada para carga de datos
  if (user.rol === "dependencias") {
    return <DashboardDependencias user={user} />
  }

  // 2. Planeación y Admin: Ambos entran al selector de áreas
  // El Admin verá todas las tarjetas desbloqueadas si su campo 'area' es 'todas'
  if (user.rol === "planeacion" || user.rol === "admin") {
    return <DashboardPlaneacion user={user} />
  }

  return <p>Rol no reconocido en el sistema</p>
}