import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../schemas/auth"

export function useLogin() {
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(loginSchema)
    });
    
    const onSubmit = async(data) => {
        setError("")
        try {
            // Simulamos tiempo de espera
            await new Promise(resolve => setTimeout(resolve, 800));

            // 1. Limpieza de datos (Seguridad básica)
            const userIn = data.email ? data.email.trim().toLowerCase() : "";
            const passIn = data.password ? data.password.trim() : "";

            let fakeUser = null;

            // 2. Lógica de credenciales falsas
            if (userIn === "seguimiento" && passIn === "1234") {
                fakeUser = { name: "Leonardo (Seguimiento)", rol: "planeacion", area: "seguimiento" };
            } 
            else if (userIn === "inversion" && passIn === "1234") {
                fakeUser = { name: "Leonardo (Inversión)", rol: "planeacion", area: "inversion" };
            }
            else if (userIn === "estrategica" && passIn === "1234") {
                fakeUser = { name: "Leonardo (Estratégica)", rol: "planeacion", area: "estrategica" };
            }

            // 3. Verificación
            if (fakeUser) {
                localStorage.setItem("token", "fake-jwt-123");
                localStorage.setItem("user", JSON.stringify(fakeUser));
                
                // Redirigir al dashboard
                window.location.href = "/dashboard";
            } else {
                setError("Usuario o contraseña incorrectos (Prueba: seguimiento / 1234)");
            }

        } catch(err) {
            // ESTO ES CLAVE: Imprime el error real en la consola (F12)
            console.error("DETALLE DEL ERROR:", err);
            setError("Error interno en el login de prueba");
        }
    };
    
    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        isSubmitting,
        error,
        showPassword,
        togglePassword: () => setShowPassword(!showPassword),
    };
}