import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList as FramerAnimatedList } from "@/components/ui/animated-list";

interface Item {
    id: string; // Added unique identifier
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

const notifications: Item[] = [
    { id: "1", name: "Escribir código", description: "Practicar regularmente mejora tus habilidades", time: "Diario", icon: "💻", color: "#00C9A7" },
    { id: "2", name: "Revisar código", description: "Mejora la calidad del código y fomenta el aprendizaje", time: "Semanal", icon: "🔍", color: "#FFB800" },
    { id: "3", name: "Nuevas tecnologías", description: "Mantente actualizado con las tendencias de la industria", time: "Mensual", icon: "📚", color: "#FF3D71" },
   
    { id: "6", name: "Hacer pausas", description: "Mejora la concentración y reduce la fatiga", time: "Cada 60 minutos", icon: "⏳", color: "#FF33A1" },
];

export function Notification({ name, description, icon, color, time }: Item) {
    return (
        <figure className={cn("...")}>
            <div className="flex flex-row items-center gap-1">
                {/* <div className="flex size-12 items-center justify-center rounded-2xl" style={{ backgroundColor: color }}>
                    <span className="text-lg">{icon}</span>
                </div> */}
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-md font-medium dark:text-white ">
                        <span className="text-lg sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    
                    <p className="text-sm font-normal dark:text-white/60">{description}</p>
                </div>
            </div>
        </figure>
    );
}

export function NotificationList({ className }: { className?: string }) {
    return (
        <div className={cn("relative flex h-[500px] w-full flex-col  overflow-hidden rounded-lg md:shadow-xl", className)}>
            <FramerAnimatedList>
                {notifications.map((item) => (
                    <Notification {...item} key={item.id} />
                ))}
            </FramerAnimatedList>
        </div>
    );
}
