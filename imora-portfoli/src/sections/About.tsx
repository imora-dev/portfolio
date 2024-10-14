import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import { IconCloudDemo } from "@/components/iconcloud";
import RetroGrid from "@/components/ui/retro-grid";

export const AboutSection = () => {
    return (
        <div className="py-20">
            <SectionHeader
                title="Una chusmiadita a mi mundo"
                description="Acá podés ver las herramientas que uso a diario, los hábitos que me mantienen productivo y un poco sobre dónde vivo y cómo me organizo."
                eyebrow="Sobre-mi" />

            <div className=" mt-20 grid grid-cols-1 md:grid-cols-5 gap-8 mx-auto max-w-3xl">
                <Card className="h-[420px] md:col-span-2">
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2">
                            <StarIcon className="size-9 text-emerald-300" />
                            <h3 className="font-serif text-3xl">Tecnologías</h3>
                        </div>
                        <p className="text-sm text-white/60">explore</p>
                    </div>
                    <div className="w-40 mx-auto mt-8"></div>
                </Card>

                <Card className="sm:mb-6 h-[320px] md:col-span-3">
                    <div className="flex flex-col mb-6">
                        <div className="inline-flex items-center gap-2">
                            <StarIcon className="size-9 text-emerald-300" />
                            <h3 className="font-serif text-3xl">Mi filosofia</h3>
                        </div>
                        <p className="text-sm text-white/60">explore</p>
                    </div>
                    
                        <span className=" pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent">
                        Cada día es una oportunidad para aprender y ser mejor que ayer.
                        </span>

                        
                    <RetroGrid className="dark -m-6 w-full " />

                </Card>

            </div>

            <div className="mt-8 md:mt-2 grid grid-cols-1 md:grid-cols-5 gap-8 mx-auto max-w-3xl">
                <Card className="md:mt-1 h-[320px] md:col-span-2">
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2">
                            <StarIcon className="size-9 text-emerald-300" />
                            <h3 className="font-serif text-3xl">Tecnologías</h3>
                        </div>
                        <p className="text-sm text-white/60">explore</p>
                    </div>
                    <div className="w-40 mx-auto mt-8"></div>
                </Card>

                <Card className="md:-mt-24  h-[420px] md:col-span-3">
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2">
                            <StarIcon className="size-9 text-emerald-300" />
                            <h3 className="font-serif text-3xl">Tecnologias</h3>
                        </div>
                        <p className="text-sm text-white/60">explore</p>
                        <IconCloudDemo />
                    </div>
                    <div className="w-40 mx-auto mt-8"></div>
                </Card>

            </div>
        </div>
    );
};
