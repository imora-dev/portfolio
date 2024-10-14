
import { PropsWithChildren } from 'react'

export const HeroOrbit = ({children,size,localAnimation,globalAnimation,rotation}:PropsWithChildren<{size:number,localAnimation:number,globalAnimation:number,rotation:number}>) => {

    return (
        <div className=" absolute -rotate-45  centralizar">
            <div className='  animate-spin '
            style={{height:`${size}px`,width:`${size}px`,animationDuration:`${globalAnimation}s`,transform:`rotate(${rotation}deg)`}}>
                <div className=' inline-flex animate-spin'
                style={{animationDuration:`${localAnimation}s`}}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

