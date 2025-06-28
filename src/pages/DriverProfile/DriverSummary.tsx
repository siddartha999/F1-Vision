import { DRIVERS } from "../../data/drivers";

const DriverSummary = () => {
    const driver = DRIVERS[0];
    return (
        <div id="driver-summary">
            <div className="relative left-[20%] w-[20rem] lg:w-[30rem] rounded-2xl p-2 mt-10 bg-ferrari-bg-theme">
                <div className="grid grid-rows-2 grid-cols-3 gap-6 justify-items-center">
                    <div id="number">
                        <p className="text-xl font-semibold">{driver.number}</p>
                        <p className="mt-1">Number</p>
                    </div>
                    <div id="birthdate">
                        <p className="text-xl font-semibold">{driver.dob}</p>
                        <p className="mt-1">Birthdate</p>
                    </div>
                    <div id="height">
                        <p className="text-xl font-semibold">{driver.height}</p>
                        <p className="mt-1">Height</p>
                    </div>
                    <div id="driver-titles">
                        <p className="text-xl font-semibold">{driver.driverTitles}</p>
                        <p className="mt-1">WDC</p>
                    </div>
                    <div id="constructor-titles">
                        <p className="text-xl font-semibold">{driver.constructorTitles}</p>
                        <p className="mt-1">WCC</p>
                    </div>
                    <div id="podiums">
                        <p className="text-xl font-semibold">{driver.podiums}</p>
                        <p className="mt-1">Podiums</p>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};

export default DriverSummary;