import { ArrowDown, Circle } from "lucide-react";
import GradualSpacing from "./ui/gradual-spacing";
import { SectionHeader } from "./SectionHeader";

export const EducationSection = () => {
    return (
        <div className="mt-40">
        
            <SectionHeader
            
                title="El Camino del Aprendizaje 🚀"
                description="Un viaje apasionante en el mundo del código"
                eyebrow="Formación"
            />
            <section className="flex justify-center pt-20">
                <div className="w-80">
                    <ul>
                        {/* UNSa - Ingenieria */}
                        <li className="relative flex gap-6 ">
                            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-emerald-500/60">
                                <div className='bg-emerald-500 h-5 w-5 rounded-full -left-[5.5px] -ml-1 mt-10'></div>
                            </div>
                            <div className="text-center text-white/60">
                                <div className="flex m-1 mt-2 text-left">
                                    <GradualSpacing
                                        className="font-serif text-2xl text-white md:leading-[5rem]"
                                        text={"UNSa - Ingeniería 2019"}
                                    />
                                </div>
                                <p className="mt-1 text-sm">
                                    Durante mi tiempo en UNSa, desarrollé un pensamiento crítico y habilidades para abordar problemas complejos. Esta experiencia me enseñó a aprender de forma autodidacta, lo que marcó el inicio de mi carrera en programación.
                                </p>
                            </div>
                        </li>

                        {/* Full-Stack Argentina Programa */}
                        <li className="relative flex gap-6 ">
                            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-emerald-500/60">
                                <div className='bg-emerald-500 h-5 w-5 rounded-full -left-[5.5px] -ml-1 mt-10'></div>
                            </div>
                            <div className="text-center text-white/60">
                                <div className="flex m-6 text-left">
                                    <GradualSpacing
                                        className="font-serif text-xl text-white md:leading-[1.75rem]"
                                        text={"      Full-Stack          Argentina Programa 2021"}
                                    />
                                </div>
                                <p className="mt-2 text-sm">
                                    En el programa Full-Stack de Argentina, realicé mi primer proyecto desde el diseño hasta el despliegue. Este curso intensivo fue fundamental para mi crecimiento como desarrollador.
                                </p>
                                <a target="_blank" href="https://drive.google.com/file/d/1qpIphBPNVrFmuprPXjEgGoGei2bmuFVk/view?usp=sharing" className='mt-6 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 transition'>
                                    <span className="text-sm">Certificado</span>
                                    <ArrowDown className='h-4 w-4' />
                                </a>
                            </div>
                        </li>

                        {/* Autodidacta */}
                        <li className="relative flex gap-6">
                            <div className="before:absolute before:left-[5.5px] before:h-28 before:w-[1px] before:bg-emerald-500/60">
                                <div className='bg-emerald-500 h-5 w-5 rounded-full -left-[5.5px] -ml-1 mt-10'></div>
                            </div>
                            <div className="text-center text-white/60">
                                <div className="flex m-2 mt-8 text-left">
                                    <GradualSpacing
                                        className="font-serif text-2xl text-white md:leading-[1.5rem]"
                                        text={"        Autodidacta         2019 - Hoy"}
                                    />
                                </div>
                                <p className="mt-2 text-sm">
                                    Desde 2019, he creado aplicaciones de forma autodidacta, aprendiendo diversas tecnologías impulsado por proyectos reales. Este enfoque práctico ha sido clave en mi desarrollo profesional.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};
