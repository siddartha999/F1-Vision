import { DRIVERS } from "../../data/drivers";

const DriverSummary = () => {
    const driver = DRIVERS[0];
    return (
        <div id="driver-summary" className="relative left-[20%] flex flex-wrap gap-4 lg:justify-between lg:w-[60%]">
            <div id="career-summary" className="w-[20rem] lg:w-[30rem] rounded-2xl p-2 mt-10 bg-ferrari-bg-theme">
                <div className="grid grid-rows-2 grid-cols-3 gap-6 justify-items-center text-center">
                    <div id="number">
                        <p className="text-xl font-semibold">{driver.number}</p>
                        <p className="mt-1">Number</p>
                    </div>
                    <div id="birthdate">
                        <p className="text-xl font-semibold">{driver.dob}</p>
                        <p className="mt-1">Birthdate</p>
                    </div>
                    <div id="nationality">
                        <p className="text-xl font-semibold">{driver.nationality}</p>
                        <p className="mt-1">Nationality</p>
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
                </div>
            </div>
        
            <div id="race-summary" className="w-[20rem] lg:w-[30rem] rounded-2xl p-2 mt-10 bg-ferrari-bg-theme">
                <div className="grid grid-rows-2 grid-cols-3 gap-6 justify-items-center text-center">
                    <div id="races">
                        <p className="text-xl font-semibold">{driver.grandPrixStats.races}</p>
                        <p className="mt-1">Races</p>
                    </div>
                    <div id="podiums">
                        <p className="text-xl font-semibold">{driver.grandPrixStats.wins}</p>
                        <p className="mt-1">Wins</p>
                    </div>
                    <div id="poles">
                        <p className="text-xl font-semibold">{driver.grandPrixStats.poles}</p>
                        <p className="mt-1">Poles</p>
                    </div>
                    <div id="podiums">
                        <p className="text-xl font-semibold">{driver.grandPrixStats.podiums}</p>
                        <p className="mt-1">Podiums</p>
                    </div>
                    <div id="points">
                        <p className="text-xl font-semibold">{driver.points}</p>
                        <p className="mt-1">Points</p>
                    </div>
                    <div id="fastest-laps">
                        <p className="text-xl font-semibold">{driver.grandPrixStats.fastestLaps}</p>
                        <p className="mt-1">Fastest Laps</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DriverSummary;