import { BaseSyntheticEvent, JSX, useContext, useState } from "react";
import Overview from "./Overview";
import LewisHamiltonImage from "../../assets/drivers/Lewis.png";
import FerrariImage from "../../assets/constructors/Ferrari.png";
import MercedesImage from "../../assets/constructors/Mercedes.png";
import MclarenImage from "../../assets/constructors/Mclaren.png";
import { DRIVER_PROFILE_NAVIGATION_ITEMS } from "./constants";
import Bio from "./Bio";
import ConstructorContext from "../../contexts/ConstructorContext";
import { IConstructorContextProps, IDriverContextProps } from "../../common/interfaces/context";
import { useParams } from "react-router";
import DriverContext from "../../contexts/DriverContext";
import Seasons from "./Seasons";

/**
 * Driver profile page.
 */
const DriverProfile = (): JSX.Element => {
    const constructorsContext: IConstructorContextProps | null = useContext(ConstructorContext);
    const driversContext: IDriverContextProps | null = useContext(DriverContext);
    const driverId = useParams().id ?? "";
    const driver = driversContext?.getDriverById(driverId);
    if (!driver) {
        return <p>Invalid id</p>
    }
    const [activeNavItem, setActiveNavItem] = useState(DRIVER_PROFILE_NAVIGATION_ITEMS.OVERVIEW.toString());

    /**
     * Update the state to hold the selected Driver profile nav item.
     */
    const handleNavItemClick = (event: BaseSyntheticEvent) => {
        const navItemClicked: string = event.target.getAttribute("id");
        setActiveNavItem(navItemClicked);
    };

    /**
     * Renders the current active navigation item's content.
     */
    const renderDriverNavContent = () => {
        switch(activeNavItem) {
            case DRIVER_PROFILE_NAVIGATION_ITEMS.OVERVIEW: return <Overview driver={driver} />;
            case DRIVER_PROFILE_NAVIGATION_ITEMS.SEASONS: return <Seasons driver={driver} />;
            case DRIVER_PROFILE_NAVIGATION_ITEMS.BIO: return <Bio driver={driver}/>;
            default: return <></>;
        }
    }

    return (
        <div id="driver-profile" className="mx-auto w-[90%] xl:w-[60%]">
            <div id="intro" className="h-[10rem] rounded-2xl p-2 mt-10 bg-ferrari-bg-theme flex gap-4">
                <div id="image" className="h-[2rem]">
                    <img src={LewisHamiltonImage} className="object-contain h-[8rem]" />
                </div>
                <div id="content" className=" grid grid-rows-2">
                    <div id="name-section" className="flex flex-wrap gap-3 items-baseline">
                        <p id="name" className="text-2xl font-bold">{driver.firstName} {driver.lastName}</p>
                        <div className="rounded-2xl px-3 py-0.75 bg-white cursor-pointer">
                            <p id="team" className="text-ferrari-bg-theme">{constructorsContext?.getConstructorById(driver.currentConstructorId)?.name}</p>
                        </div>
                    </div>
                     <div id="team-images" className="grid grid-cols-3 justify-items-center align-center self-end">
                        <img src={FerrariImage} className="object-contain h-[6rem]"/>
                        <img src={MercedesImage} className="object-contain h-[6rem] w-[4rem]" />
                        <img src={MclarenImage} className="object-contain h-[6rem]"/>
                    </div>
                </div>
            </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xl mt-4 text-center place-items-center" onClick={handleNavItemClick}>
                {
                    Object.values(DRIVER_PROFILE_NAVIGATION_ITEMS).map((item) => {
                        const isNavItemActive: boolean = item === activeNavItem;
                        return  (
                            <p id={item} className={`rounded-xl w-[8rem] lg:w-[10rem] cursor-pointer p-1 
                                ${isNavItemActive ? `bg-blue-500 hover:bg-blue-600` : `bg-gray-500 hover:bg-gray-600`}`}>{item}</p>
                        )
                    })
                }
            </div>

            {renderDriverNavContent()}
            
        </div>
    );
};


export default DriverProfile;