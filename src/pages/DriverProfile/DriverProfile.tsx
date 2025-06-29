import { BaseSyntheticEvent, JSX, useState } from "react";
import { DRIVERS } from "../../data/drivers";
import DriverSummary from "./DriverSummary";
import LewisHamiltonImage from "../../assets/drivers/lewis-hamilton.png";
import FerrariImage from "../../assets/constructors/Ferrari.png";
import MercedesImage from "../../assets/constructors/Mercedes.png";
import MclarenImage from "../../assets/constructors/Mclaren.png";
import { DRIVER_PROFILE_NAVIGATION_ITEMS } from "./constants";

/**
 * Driver profile page.
 */
const DriverProfile = (): JSX.Element => {
    const driver = DRIVERS[0];
    const [activeNavItem, setActiveNavItem] = useState(DRIVER_PROFILE_NAVIGATION_ITEMS.OVERVIEW.toString());

    /**
     * Update the state to hold the selected Driver profile nav item.
     */
    const handleNavItemClick = (event: BaseSyntheticEvent) => {
        const navItemClicked: string = event.target.getAttribute("id");
        setActiveNavItem(navItemClicked);
    };

    const activeNavItemBg = (navItem: string) => {
        if (navItem === activeNavItem) {
            return `bg-blue-500`;
        }
        return `bg-gray-600`;
    }

    return (
        <div id="driver-profile" className="relative left-[20%] ">
            <div id="intro" className="w-[80%] lg:w-[60%] h-[10rem] rounded-2xl p-2 mt-10 bg-ferrari-bg-theme flex gap-4">
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
                     <div id="team-images" className="grid grid-cols-3 justify-items-center align-center self-end">
                        <img src={FerrariImage} className="object-contain h-[6rem]"/>
                        <img src={MercedesImage} className="object-contain h-[6rem] w-[4rem]" />
                        <img src={MclarenImage} className="object-contain h-[6rem]"/>
                    </div>
                </div>
            </div>

             <div className="grid grid-cols-4 w-[80%] lg:w-[60%] text-xl mt-4 text-center" onClick={handleNavItemClick}>
                {
                    Object.values(DRIVER_PROFILE_NAVIGATION_ITEMS).map((item) => (
                        <p id={item} className={`rounded-xl w-[10rem] cursor-pointer p-1 ${activeNavItemBg(item)}`}>{item}</p>
                    ))
                }
            </div>

            <DriverSummary />
            
        </div>
    );
};


export default DriverProfile;