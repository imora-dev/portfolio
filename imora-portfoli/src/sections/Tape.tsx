import StarIcon from "@/assets/icons/star.svg";

export const TapeSection = () => {
    const habilidades = [
        "Liderazgo",
        "Gestión",
        "Emprendimiento",
        "Pragmatismo",
        "Enfoque",
        "Experiencia",
        "Análisis",
        "Escalabilidad",
        "Resolución"
    ];

    return (
        <div className="py-2">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-2">
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex flex-none mx-auto gap-4 py-4 ">
                        {habilidades.map(word => (
                            <div className="inline-flex gap-4 items-center " key={word}>
                                <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                                <StarIcon className="size-6 text-gray-900" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}