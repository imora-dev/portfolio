import GradualSpacing from "./ui/gradual-spacing";

export const SectionHeader = ({ title, eyebrow, description }: { title: string; eyebrow: string; description: string; }) => {

    return (
        <>
            <div className="flex justify-center">
                <p className=" uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">
                    {eyebrow}
                </p>
            </div>
            <div className="m-6">
                <GradualSpacing
                    className=" max-w-lg font-serif text-3xl text-center   md:leading-[5rem] "
                    text={title}
                /></div>

            <p className="text-center text-white/60 mt-6 max-w-lg mx-auto">
                {description}
            </p>
        </>
    )
}