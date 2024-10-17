import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import LetterPullup from "./ui/letter-pullup";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function SocialDock() {
    return (
        <div className="relative">
            <LetterPullup words={"Acá tenes mis redes sociales!!!"} delay={0.05} className="text-white text-2xl" />
            <Dock direction="middle">
                <DockIcon className="transition-transform duration-300 hover:scale-125 ">
                    <a target="_blank" href="https://github.com/imora-dev">
                        <Icons.gitHub className="size-6" />
                    </a>
                </DockIcon>
                <DockIcon className="transition-transform duration-300 hover:scale-125 ">
                    <a target="_blank" href="https://www.instagram.com/imora.dev/profilecard/?igsh=bHg0bHVyemlrZDY3">
                        <Icons.instagam className=" size-6" />
                    </a>
                </DockIcon>
                <DockIcon className="transition-transform duration-300 hover:scale-125 ">
                    <a target="_blank" href="https://www.linkedin.com/in/imora-dev">
                        <Icons.linkedin className=" size-6" />
                    </a>
                </DockIcon>
                <DockIcon className="transition-transform duration-300 hover:scale-125 ">
                    <a target="_blank" href="mailto:imoraaa762@gmail.com">
                        <Icons.gmail className="size-6" />
                    </a>
                </DockIcon>
            </Dock>
        </div>
    );
}

const Icons = {
    gitHub: (props: IconProps) => (
        <img src="https://skillicons.dev/icons?i=github&perline=14" />
    ),
    instagam: (props: IconProps) => (
        <img src="https://skillicons.dev/icons?i=instagram&perline=14" />
    ),
    linkedin: (props: IconProps) => (
        <img src="https://skillicons.dev/icons?i=linkedin&perline=14" />
    ),
    gmail: (props: IconProps) => (
        <img src="https://skillicons.dev/icons?i=gmail&perline=14" />
    ),
};
