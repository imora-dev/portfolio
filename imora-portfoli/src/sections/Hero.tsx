"use client";

import DevImage from '@/assets/images/imora.png'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import grainImage from "@/assets/images/grain.jpg"
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit'
import { Hanalei } from 'next/font/google'
import { useRouter } from "next/navigation";

export const HeroSection = () => {
    const router = useRouter();
    const handleCklic = (route: string) => {
        router.push(route);

    }

    return (

        <div className='py-20 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
            <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
                <div className='absolute inset-0 -z-30 opacity-5'
                    style={{ backgroundImage: `url(${grainImage.src})` }}
                ></div>
                <div className='size-[620px] hero-ring'></div>
                <div className='size-[820px] hero-ring'></div>
                <div className='size-[1020px] hero-ring'></div>
                <div className='size-[1220px] hero-ring'></div>

                <HeroOrbit size={420} globalAnimation={35} localAnimation={2} rotation={25}>
                    <StarIcon className="text-emerald-300 size-25 " />
                </HeroOrbit>
                <HeroOrbit size={620} globalAnimation={20} localAnimation={5} rotation={-5}>
                    <StarIcon className="text-emerald-300 size-25 " />
                </HeroOrbit>
                <HeroOrbit size={800} globalAnimation={90} localAnimation={9} rotation={16}>
                    <StarIcon className="text-emerald-300 size-24 " />
                </HeroOrbit>
                <HeroOrbit size={720} globalAnimation={45} localAnimation={9} rotation={25}>
                    <SparkleIcon className="text-emerald-300/20 size-24 " />
                </HeroOrbit>
                <HeroOrbit size={600} globalAnimation={935} localAnimation={9} rotation={45}>
                    <SparkleIcon className="text-emerald-300/20 size-5 " />
                </HeroOrbit>
                <HeroOrbit size={520} globalAnimation={965} localAnimation={12} rotation={115}>
                    <SparkleIcon className="text-emerald-300/20 size-8" />
                </HeroOrbit>
                <HeroOrbit size={520} globalAnimation={165} localAnimation={9} rotation={155}>
                    <SparkleIcon className="text-emerald-300/20 size-8" />
                </HeroOrbit>
                <HeroOrbit size={520} globalAnimation={65} localAnimation={9} rotation={-17}>
                    <SparkleIcon className="text-emerald-300/20 size-8" />
                </HeroOrbit>
                <HeroOrbit size={520} globalAnimation={265} localAnimation={9} rotation={295}>
                    <SparkleIcon className="text-emerald-300/20 size-8" />
                </HeroOrbit>
                <HeroOrbit size={520} globalAnimation={965} localAnimation={9} rotation={-25}>
                    <SparkleIcon className="text-emerald-300/20 size-8" />
                </HeroOrbit>
                <HeroOrbit size={420} globalAnimation={965} localAnimation={15} rotation={165}>
                    <SparkleIcon className="text-emerald-300/20 size-8" />
                </HeroOrbit>
            </div>
            <div className="container mx-auto">
                <div className='flex flex-col items-center '>
                    <h3 className='font-serif text-2xl md:text-2xl text-center mt-8 tracking-wide'>
                        full-stack   developer
                    </h3>
                    <Image src={DevImage} alt='imora programando'
                        className='w-[200px]' />
                    <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl'>
                        <div className='bg-green-500 size-2.5 rounded-full '></div>
                        <div className='text-sm font-medium'>Disponible para nuevos desafios</div>
                    </div>
                </div>
                <div className='max-w-lg mx-auto'>
                    <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
                        Transformando Ideas en Innovación
                    </h1>
                    <p className='mt-4 text-center text-white/60 md:text-lg'>
                        Soy un desarrollador multidisciplinario enfocado en resultados.
                        Llevo proyectos desde una idea hasta su MVP, combinando análisis de mercado,
                        experiencia de usuario y eficiencia funcional para crear soluciones ágiles,
                        precisas y altamente escalables.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
                    <a target='_blank' href='https://drive.google.com/file/d/17Ko1BjliybTcQJ1EZ2NUChWnKdviELvO/view?usp=drive_link' className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-50'>
                        <span>Mi resumen</span>
                        <ArrowDown className='size-4' />
                    </a>
                    <button onClick={() => handleCklic("/#Contacto")} className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-50'>
                        <span>👋</span>
                        <span className='font-semibold'>¡Conectemos!</span>
                    </button>
                </div>
            </div>
        </div>
    )
}