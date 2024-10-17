import StarIcon from "@/assets/icons/star.svg";

export const TapeSection = () => {
    const habilidades = [
        "Liderazgo",
        "Emprendimiento",
        "Pragmatismo",
        "Enfoque",
        "Experiencia",
        "Análisis",
        "Escalabilidad",
        "Resolución",
        "Liderazgo",
        "Emprendimiento",
        "Pragmatismo",
        "Enfoque",
        "Experiencia",
        "Análisis",
        "Escalabilidad",
        "Resolución",
        "Liderazgo",
        "Emprendimiento",
        "Pragmatismo",
        "Enfoque",
        "Experiencia",
        "Análisis",
        "Escalabilidad",
        "Resolución"
    ];

    return (
        <div className="py-2 overflow-hidden -rotate-3">
            <style>
                {`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%); /* Cambia a -50% para un mejor desplazamiento */
                    }
                }

                .marquee {
                    display: flex;
                    animation: marquee 30s linear infinite; /* Ajusta la duración */
                    white-space: nowrap;
                    width: 200%; /* Asegúrate de que el ancho es suficiente */
                }

                .inner {
                    display: flex;
                    gap: 0rem; /* Aumenta el espacio entre los elementos */
                    padding: 1rem 0;
                }
                `}
            </style>
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 max-w-[100vw]">
                <div className="marquee">
                    <div className="inner">
                        {habilidades.map(word => (
                            <div className="inline-flex gap-2 items-center" key={word}>
                                <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                                <StarIcon className="size-6 text-gray-900" />
                            </div>
                        ))}
                    </div>
                   
                </div>
            </div>
        </div>
    );
};
