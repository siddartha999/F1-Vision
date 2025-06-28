import { JSX } from "react";
import { DRIVERS } from "../../data/drivers";
import DriverSummary from "./DriverSummary";
import LewisHamiltonImage from "../../assets/drivers/lewis-hamilton.png";
import FerrariImage from "../../assets/constructors/Ferrari.png";
import MercedesImage from "../../assets/constructors/Mercedes.png";
import MclarenImage from "../../assets/constructors/Mclaren.png";

/**
 * Driver profile page.
 */
const DriverProfile = (): JSX.Element => {
    const driver = DRIVERS[0];
    return (
        <div id="driver-profile">
            <div id="intro" className="relative left-[20%] w-[80%] lg:w-[60%] h-[10rem] rounded-2xl p-2 mt-10 bg-ferrari-bg-theme flex gap-4">
                <div id="image" className="h-[2rem]">
                    <img src={LewisHamiltonImage} className="object-contain h-[8rem]" />
                </div>
                <div id="content" className=" grid grid-rows-2">
                    <div id="name-section" className="flex flex-wrap gap-3 items-baseline">
                        <p id="name" className="text-2xl font-bold">{driver.firstName} {driver.lastName}</p>
                        <div className="rounded-2xl px-3 py-0.75 bg-white cursor-pointer">
                            <p id="team" className="text-ferrari-bg-theme">{driver.currentTeam}</p>
                        </div>
                    </div>
                     <div id="team-images" className="flex flex-wrap gap-2 align-center self-end">
                        <img src={FerrariImage} className="object-contain h-[6rem]"/>
                        <img src={MercedesImage} className="object-contain h-[6rem] w-[4rem]" />
                        <img src={MclarenImage} className="object-contain h-[6rem]"/>
                    </div>
                </div>
            </div>

            <DriverSummary />
            
        </div>
    );
};


export default DriverProfile;