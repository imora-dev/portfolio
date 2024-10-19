import { Marquee3D } from "./3dimage";
import { FulbopagoCard } from "./fulbopagocard";
import { SmartPhone } from "./smartphone";
import { StaticCalcCard } from "./static_calc_card";

export const ProjectCards = () => {
    return (
    <div className="flex flex-col mx-auto">
        <div className="flex justify-center  flex-col md:flex-row  items-center space-x-8 mx-auto mt-20"> {/* Flexbox container */}

            <FulbopagoCard />
            {/* SmartPhone component */}
            <SmartPhone />
        </div>
        <div className="flex justify-center  flex-col md:flex-row  items-center space-x-8 mx-auto mt-20"> {/* Flexbox container */}

            <StaticCalcCard/>
            {/* SmartPhone component */}
            <Marquee3D/>
        </div>
    </div>
    );
};
