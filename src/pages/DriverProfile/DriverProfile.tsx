import { BaseSyntheticEvent, JSX, useContext, useState } from "react";
import Overview from "./Overview";
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
    const driverFullName = useParams().fullName ?? "";
    const driver = driversContext?.getDriverByFullName(driverFullName);
    if (!driver) {
        return <p>Invalid id</p>
    }
    const [activeNavItem, setActiveNavItem] = useState(DRIVER_PROFILE_NAVIGATION_ITEMS.OVERVIEW.toString());
    const currentConstructorStyles = constructorsContext?.getConstructorStylesById(driver.currentConstructorId) ?? null;

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
            case DRIVER_PROFILE_NAVIGATION_ITEMS.OVERVIEW: return <Overview driver={driver} currentConstructorStyles={currentConstructorStyles} />;
            case DRIVER_PROFILE_NAVIGATION_ITEMS.SEASONS: return <Seasons driver={driver} currentConstructorStyles={currentConstructorStyles}/>;
            case DRIVER_PROFILE_NAVIGATION_ITEMS.BIO: return <Bio driver={driver}/>;
            default: return <></>;
        }
    }

    return (
        <div id="driver-profile" className="mx-auto w-[90%] xl:w-[60%]">
            <div id="intro" className={`h-[10rem] rounded-2xl p-2 mt-10 ${currentConstructorStyles?.bgPrimary} ${currentConstructorStyles?.textPrimary} flex gap-4`}>
                <div id="image" className="h-[2rem]">
                    <img src={`/assets/drivers/${driver.firstName.toLowerCase()}_${driver.lastName?.toLowerCase()}.png`} className="object-contain h-[8rem]" />
                </div>
                <div id="content" className="grid items-center">
                    <p id="name" className="text-4xl font-bold self-end">{driver.firstName} {driver.lastName}</p>
                    <div id="constructors" className="flex gap-4 justify-items-center align-center self-end">
                        {driver.constructorIds.map(cid => {
                            const constructor = constructorsContext?.getConstructorById(cid);
                            return <p className={`rounded-2xl text-xl py-1.5 px-8 text-center font-semibold
                                ${currentConstructorStyles?.bgRounded} ${currentConstructorStyles?.textRounded} cursor-pointer`}>
                                {constructor?.name}</p>
                        })}
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