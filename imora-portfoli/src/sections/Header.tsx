export const Header = () => {

    return (
        <div className="flex items-center justify-center relative top-3 " > 
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
            <a href="#" className="nav-item">Inicio</a>
            <a href="#" className="nav-item">Proyectos</a>
            <a href="#" className="nav-item">Sobre mi</a>
            <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contacto</a>
            </nav>
        </div>
    )


}