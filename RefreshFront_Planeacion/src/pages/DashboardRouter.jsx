import { useEffect, useState } from "react"
//import DashboardDependencias from "./DashboardDependencias"
//import DashboardAdmin from "./DashboardAdmin"
import DashboardPlaneacion from "./DashboardPlaneacion"

export default function DashboardRouter() {
  const [user, setUser] = useState(null)
  // Añadimos un estado de loading para evitar fallos visuales
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    // ============================================================
    // 🚧 MOCK (DATOS FALSOS): LECTURA DESDE LOCALSTORAGE
    // ============================================================
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("DATA DEL USUARIO (MOCK):", parsedUser);
      setUser(parsedUser);
    }
    setLoading(false); // Terminamos de verificar

    // ============================================================
    // 🚀 CÓDIGO REAL DE TU COMPAÑERO (Descomentar cuando haya Backend)
    // ============================================================
    /*
    const token = localStorage.getItem("token")
    if(token) {
      fetch("http://localhost:3001/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log("DATA DEL USUARIO:", data)
        setUser(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error al validar token:", err);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
    */
  }, [])

  // Mientras lee el localStorage (o el fetch), mostramos cargando
  if (loading) return <p>Cargando Sistema...</p>

  // Si terminó de cargar y no hay usuario, bloqueamos
  if (!user) return <p>No autorizado - Debes iniciar sesión</p>

  // Ruteo por roles
  if (user.rol === "dependencias") {
    return <DashboardDependencias />;
  }

  if (user.rol === "planeacion") {
    // 🔥 IMPORTANTE: Pasamos el 'user' como prop para que tu 
    // WorkspacePlaneacion/DashboardPlaneacion sepa el 'área' (inversion, seguimiento, etc.)
    return <DashboardPlaneacion user={user} />;
  }

  if (user.rol === "admin") {
    return <DashboardAdmin />;
  }

  return <p>Rol no reconocido</p>
}