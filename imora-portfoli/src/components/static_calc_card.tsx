export const StaticCalcCard = () => {

    return(
        <div>
          {/* Card */}
          <div className="card w-80 h-auto bg-gray-700/60 rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                        <div className="card-content p-4 relative z-10">
                            <div className="flex items-center mb-4">
                                <div>
                                    <p className="font-futura text-2xl">Static Calc</p>
                                    <span className="text-xs font-medium  py-0.5 rounded-full mt-1 inline-block  text-white-300/90">
                                        Motor de calculo de estructuras
                                    </span>
                                </div>
                            </div>
        
                            <div className="mb-4">
                                <h3 className="text-xs font-semibold text-white/80 mb-2"></h3>
                                <div className="flex flex-wrap -mx-1">
                                    {/* Skill tags */}
                                    {["Python","Exel"].map((skill) => (
                                        <div
                                            key={skill}
                                            className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
        
                            <div className="mb-4">
                                <h3 className="text-xs font-semibold text-white/80 mb-2">Tareas</h3>
                                <ul className="text-xs text-white/60 grid grid-cols-1 gap-1">
                                    {[
                                        "Resolucion del problema fisico",
                                        "programar el metodo de resolucion matricial",
                                        "programar salida de datos en excel",
                                        "progrmar graficos",
                                        
                                    ].map((task) => (
                                        <li key={task} className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                fill="none"
                                                className="w-3 h-3 mr-1 text-white/70"
                                            >
                                                <path
                                                    d="M5 13l4 4L19 7"
                                                    strokeWidth={2}
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <span title={task} className="truncate">{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
        
                            {/* Buttons */}
                            <div className="flex justify-between items-center space-x-2">
                                <a target="_blank" href="https://colab.research.google.com/drive/1-691ZUZatEI1gZo7jpZDwFoOsD8DufFD?usp=sharing" className="flex-1 bg-white/10 text-white/90 rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/20 flex items-center justify-center border border-white/20 rounded-xl">
                                  
                                   Visitar
                                </a>
                                
                            </div>
                        </div>
                    </div>
        
        </div>
        );
        
}