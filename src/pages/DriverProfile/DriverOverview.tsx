import { DRIVERS } from "../../data/drivers";

interface ICircuit {
    gp: string;
    races: string;
    wins: string;
    poles: string;
    fastestLaps: string;
    podiums: string;
    points: string;
    lapsLed: string;
    kmsLed: string;
}

const DriverOverview = () => {
    const driver = DRIVERS[0];

    const topFiveCircuitsByWins = (ciruits: ICircuit[]): ICircuit[] => {
        ciruits = ciruits.sort((a, b) => Number(b.wins) - Number(a.wins));
        return ciruits.slice(0, 5);
    }


    const topFiveCircuitsByPoles = (ciruits: ICircuit[]): ICircuit[] => {
        ciruits = ciruits.sort((a, b) => Number(b.poles) - Number(a.poles));
        return ciruits.slice(0, 5);
    }

    return (
        <div id="driver-overview" className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4">
            <div id="career-overview" className="rounded-2xl p-2 mt-10 bg-ferrari-bg-theme">
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
        
            <div id="race-overview" className="rounded-2xl p-2 mt-10 bg-ferrari-bg-theme">
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

            <div id="circuits-by-wins" className="rounded-2xl p-2 mt-10 bg-ferrari-bg-theme">
                <p className="font-bold text-xl mb-4">Top 5 Circuits by Wins</p>
                <div id="" className='grid text-center gap-4 mt-4'>
                    <div id="" className='grid grid-cols-6'>
                        <p></p>
                        <p className='col-span-3'>Circuit</p>
                        <p>Wins</p>
                        <p>%</p>
                    </div>
                    {
                        topFiveCircuitsByWins(driver.grandPrixStats.circuits).map((circuit, index) => 
                            <div className='grid grid-cols-6'>
                                <p>{index + 1}</p>
                                <p className='col-span-3 font-bold'>{circuit.gp}</p>
                                <p>{circuit.wins}</p>
                                <p>{((+circuit.wins / +circuit.races) * 100).toFixed(2)}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div id="circuits-by-poles" className="rounded-2xl p-2 mt-10 bg-ferrari-bg-theme">
                <p className="font-bold text-xl mb-4">Top 5 Circuits by Poles</p>
                <div id="" className='grid text-center gap-4 mt-4'>
                    <div id="" className='grid grid-cols-6'>
                        <p></p>
                        <p className='col-span-3'>Circuit</p>
                        <p>Poles</p>
                        <p>%</p>
                    </div>
                    {
                        topFiveCircuitsByPoles(driver.grandPrixStats.circuits).map((circuit, index) => 
                            <div className='grid grid-cols-6'>
                                <p>{index + 1}</p>
                                <p className='col-span-3 font-bold'>{circuit.gp}</p>
                                <p>{circuit.poles}</p>
                                <p>{((+circuit.poles / +circuit.races) * 100).toFixed(2)}</p>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default DriverOverview;