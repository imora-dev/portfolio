import Marquee from "@/components/ui/marquee";
import chassis1 from "@/assets/images/chasis1.jpg"
import chassis2 from "@/assets/images/chasis2.jpg"
import chassis3 from "@/assets/images/chasis3.jpg"
import chassis4 from "@/assets/images/chasis4.jpg"
import { div } from "framer-motion/client";

const logos = [
  {
    name: "chassis1",
    img: chassis1.src,
  },
  {
    name: "chassis3",
    img: chassis3.src,
  },
  {
    name: "chassis4",
    img: chassis4.src,
  },
  {
    name: "chassis2",
    img: chassis2.src,
  }
];

export function Marquee3D() {
  return (
<div className="flex mx-auto pt-6 pr-8">



    <div className="card   w-80 h-auto bg-gray-700/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
      <div className="flex h-full card-content relative z-10 flex-col items-center  gap-2 overflow-hidden rounded-lg  bg-background px-20 md:shadow-xl">
        <div className="flex flex-row gap-4 [perspective:250px]">
          <Marquee
            className="h-96  overflow-hidden [--duration:60s] [--gap:1rem]"
            vertical
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(150px) rotateX(0deg) rotateY(0) rotateZ(15deg) scale(1)",
            }}
          >
            {logos.map((data, idx) => (
              <img
                key={idx}
                src={data.img}
                alt={data.name}
                className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
              />
            ))}
          </Marquee>
        </div>


      </div>
    </div>
    </div>
  );
}
