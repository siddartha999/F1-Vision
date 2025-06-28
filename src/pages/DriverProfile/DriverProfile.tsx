import { JSX } from "react";
import { DRIVERS } from "../../data/drivers";
import DriverSummary from "./DriverSummary";


/**
 * Driver profile page.
 */
const DriverProfile = (): JSX.Element => {
    const driver = DRIVERS[0];
    return (
        <div id="driver-profile">
            <div id="intro" className="relative left-[20%] w-[80%] lg:w-[60%] h-[6rem] rounded-2xl p-2 mt-10 bg-ferrari-bg-theme">
                <div id="image"></div>
                <div id="content" className="self-baseline mt-4">
                    <div id="name-section" className="flex flex-wrap gap-3 items-baseline">
                        <p id="name" className="text-2xl font-bold">{driver.firstName} {driver.lastName}</p>
                        <div className="rounded-2xl px-3 py-0.75 bg-white cursor-pointer">
                            <p id="team" className="text-ferrari-bg-theme">{driver.currentTeam}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <DriverSummary />
            </div>
        </div>
    );
};


export default DriverProfile;