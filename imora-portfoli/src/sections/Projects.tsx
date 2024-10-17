import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader"
import { SmartPhone } from "@/components/smartphone"


export const ProjectsSection = () => {

    return (
        <div className=" mt-20" id="Proyectos">
            
            <SectionHeader
                title="¡Proyectos que Transforman! 🚀✨"
                description="Sumérgete en mis creaciones y descubre el impacto del código."
                eyebrow="Creaciones"
            />


            <div className="flex flex-row gap-8 s">

            <ProjectCard/>
          
           

 </div>


           

        </div>
    );
};







