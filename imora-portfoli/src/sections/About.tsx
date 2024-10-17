import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import { IconCloudDemo } from "@/components/iconcloud";
import RetroGrid from "@/components/ui/retro-grid";
import { NotificationList } from "@/components/AnimatedList";
import { FileTreeDemo } from "@/components/FileTree";

export const AboutSection = () => {
    return (
        <div className="py-20" id="SobreMi">
            <SectionHeader
                title="Una chusmiadita a mi mundo"
                description="Acá podés ver las herramientas que uso a diario, los hábitos que me mantienen productivo y un poco sobre dónde vivo y cómo me organizo."
                eyebrow="Sobre-mi" />

            <div className=" mt-20 grid grid-cols-1 md:grid-cols-7 gap-8 mx-auto max-w-4xl  ">
                <Card className="h-[420px] md:col-span-3 m-6">
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2">
                            <StarIcon className="size-9 text-emerald-300" />
                            <h3 className="font-serif text-3xl">Mis Habitos</h3>
                        </div>
                        <p className="text-sm text-white/60">Como me converti en programador?</p>
                    </div>
                    <div className="w-full -m-6 mx-auto mt-2">
                    <NotificationList/>
                    </div>
                </Card>

                <Card className="sm:mb-6 h-[320px] md:col-span-4 m-6">
                    <div className="flex flex-col mb-6">
                        <div className="inline-flex items-center gap-2">
                            <StarIcon className="size-9 text-emerald-300" />
                            <h3 className="font-serif text-3xl">Mi filosofia</h3>
                        </div>
                        <p className="text-sm text-white/60">Esta frase es mi brujula para el largo plazo</p>
                    </div>
                    
                        <span className=" pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent">
                        Cada día es una oportunidad para aprender y ser mejor que ayer.
                        </span>

                        
                    <RetroGrid className="dark -m-6 w-full " />

                </Card>

            </div>

            <div className="mt-8 md:mt-2 grid grid-cols-1 md:grid-cols-7 gap-8 mx-auto max-w-4xl ">
                <Card className="md:mt-1 h-[400px] md:col-span-3 m-6">
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2">
                            <StarIcon className="size-9 text-emerald-300" />
                            <h3 className="font-serif text-3xl">Prioridades</h3>
                        </div>
                    </div>
                    <p className="text-sm text-white/60">Mis prioridades en la vida.</p>
                    <div className="w-full mx-auto mt-2">
                    <FileTreeDemo/>
                    </div>
                </Card>

                <Card className="md:-mt-24  h-[500px] md:col-span-4 m-6">
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2">
                            <StarIcon className="size-9 text-emerald-300" />
                            <h3 className="font-serif text-3xl">Tecnologias</h3>
                        </div>
                        <p className="text-sm text-white/60">No tengo miedo de adaptarme; a lo largo de mi carrera he dominado múltiples tecnologías. Lo único constante es el cambio.</p>
                        <IconCloudDemo />
                    </div>
                    <div className="w-40 mx-auto mt-8"></div>
                </Card>

            </div>
        </div>
    );
};
