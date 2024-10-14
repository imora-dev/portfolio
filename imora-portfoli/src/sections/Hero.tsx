import DevImage from '@/assets/images/imora.png'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import grainImage from "@/assets/images/grain.jpg"
export const HeroSection = () => {
    return (

        <div className='py-20 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
            <div className='absolute inset-0 -z-30 opacity-5'
                style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>
            <div className='size-[620px] hero-ring'></div>
            <div className='size-[820px] hero-ring'></div>
            <div className='size-[1020px] hero-ring'></div>

            <div className="container mx-auto">
                <div className='flex flex-col items-center '>
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
                    <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
                        <span>Explora Mi Trabajo</span>
                        <ArrowDown className='size-4' />
                    </button>
                    <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
                        <span>👋</span>
                        <span className='font-semibold'>¡Conectemos!</span>
                    </button>
                </div>
            </div>
        </div>
    )
}