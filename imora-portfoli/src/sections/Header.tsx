"use client"; // Esto indica que es un Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos el hook de navegación

export const Header = () => {
    const [selected, setSelected] = useState<string>("");
    const router = useRouter(); // Inicializamos el router para la navegación

    const handleClick = (path: string, route: string) => {
        setSelected(path); // Actualiza el estado con el path seleccionado
        router.push(route); // Navega a la ruta especificada
    };

    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-50">
            <nav className="flex gap-1 p-0.2 border border-white/15 rounded-full bg-white/10 backdrop-blur transition">
                <button onClick={() => handleClick("Inicio", "/")} className={`nav-item ${selected === "Inicio" ? "bg-white text-gray-900" : ""}`}>
                    Inicio
                </button>
                <button onClick={() => handleClick("Proyectos", "/proyectos")} className={`nav-item ${selected === "Proyectos" ? "bg-white text-gray-900" : ""}`}>
                    Proyectos
                </button>
                <button onClick={() => handleClick("SobreMi", "/#SobreMi")} className={`nav-item ${selected === "SobreMi" ? "bg-white text-gray-900" : ""}`}>
                    Sobre mi
                </button>
                <button onClick={() => handleClick("Contacto", "/contacto")} className={`nav-item ${selected === "Contacto" ? "bg-white text-gray-900" : ""}`}>
                    Contacto
                </button>
            </nav>
        </div>
    );
};
