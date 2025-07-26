import { BaseSyntheticEvent, JSX, useState } from "react";
import { IDriver, IDriverAtCircuit } from "../../common/interfaces/driver";
import { IConstructorStyle } from "../../common/interfaces/constructor";

interface IOverviewProps {
    driver: IDriver;
    currentConstructorStyles: IConstructorStyle | null;
};

const Overview = (props: IOverviewProps): JSX.Element => {
    const driver = props.driver;
    const [topWinsByCircuitObj, setTopWinsByCircuitObj] = useState({
        active: "1"
    });
    const [topPolesByCircuitObj, setTopPolesByCircuitObj] = useState({
        active: "1"
    });
    const [topWinPercentageByCircuitObj, setTopWinPercentageByCircuitObj] = useState({
        active: "1"
    });
    const [topPolePercentageByCircuitObj, setTopPolePercentageByCircuitObj] = useState({
        active: "1"
    });

    const handleTopWinsByCircuitSelection = (event: BaseSyntheticEvent) => {
        setTopWinsByCircuitObj({
            active: event.target.textContent
        });
    };
    
    const handleTopPolesByCircuitSelection = (event: BaseSyntheticEvent) => {
        setTopPolesByCircuitObj({
            active: event.target.textContent
        });
    };

    const handleTopWinPercentageByCircuitSelection = (event: BaseSyntheticEvent) => {
        setTopWinPercentageByCircuitObj({
            active: event.target.textContent
        });
    };

    const handleTopPolePercentageByCircuitSelection = (event: BaseSyntheticEvent) => {
        setTopPolePercentageByCircuitObj({
            active: event.target.textContent
        });
    };

    const topFiveCircuitsByWins = (dac: IDriverAtCircuit[]): IDriverAtCircuit[] => {
        return dac
            .filter(obj => Number(obj.races) >= Number(topWinsByCircuitObj.active))
            .sort((a, b) => {
            return Number(b.wins) - Number(a.wins);
        }).slice(0, 5);
    }

    const topFiveCircuitsByPoles = (dac: IDriverAtCircuit[]): IDriverAtCircuit[] => {
        return dac
            .filter(obj => Number(obj.races) >= Number(topPolesByCircuitObj.active))
            .sort((a, b) => {
            return Number(b.poles) - Number(a.poles);
        }).slice(0, 5);
    }

    const topFiveCircuitsByWinPercentage = (dac: IDriverAtCircuit[]): IDriverAtCircuit[] => {
        return dac
            .filter(obj => Number(obj.races) >= Number(topWinPercentageByCircuitObj.active))
            .sort((a, b) => {
                if (a.races === "0" || b.races === "0") return 0;
                return Number(Number(b.wins) / Number(b.races)) - Number(Number(a.wins)) / Number(a.races);
            })
            .slice(0, 5);
    }

    const topFiveCircuitsByPolePercentage = (dac: IDriverAtCircuit[]): IDriverAtCircuit[] => {
        return dac
            .filter(obj => Number(obj.races) >= Number(topPolePercentageByCircuitObj.active))
            .sort((a, b) => {
                if (a.races === "0" || b.races === "0") return 0;
                return Number(Number(b.poles) / Number(b.races)) - Number(Number(a.poles) / Number(a.races));
            })
            .slice(0, 5);
    }

    const isBadgeActive = (activeBadgeId:string, badgeId: string) => {
        return activeBadgeId === badgeId ? `bg-gray-400` : ``;
    };

    return (
        <div id="driver-overview" className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4">
            <div id="career-overview" className={`rounded-2xl border-2 p-2 mt-10 ${props.currentConstructorStyles?.bgPrimary} ${props.currentConstructorStyles?.textPrimary}`}>
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
                        <p className="text-xl font-semibold">{driver.driverTitles}x</p>
                        <p className="mt-1">WDC</p>
                    </div>
                    <div id="constructor-titles">
                        <p className="text-xl font-semibold">{driver.constructorTitles}x</p>
                        <p className="mt-1">WCC</p>
                    </div>
                </div>
            </div>
        
            <div id="race-overview" className={`rounded-2xl border-2 p-2 mt-10 ${props.currentConstructorStyles?.bgPrimary} ${props.currentConstructorStyles?.textPrimary}`}>
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

            <div id="circuits-by-wins" className={`rounded-2xl border-2 p-4 mt-10 ${props.currentConstructorStyles?.bgPrimary} ${props.currentConstructorStyles?.textPrimary}`}>
                <div className="grid grid-cols-2 mb-4">
                    <p className="font-bold text-xl">Top 5 Circuits by Wins</p>
                    <div className="grid grid-cols-5 gap-4 text-center">
                        <p className="col-span-2">Min Races: </p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topWinsByCircuitObj.active, '1')}`}
                            onClick={handleTopWinsByCircuitSelection}>1</p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topWinsByCircuitObj.active, '3')}`}
                            onClick={handleTopWinsByCircuitSelection}>3</p>
                        <p className= {`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topWinsByCircuitObj.active, '5')}`}
                            onClick={handleTopWinsByCircuitSelection}>5</p>
                    </div>
                </div>
                <div id="" className='grid text-center gap-4 mt-4'>
                    <div id="" className='grid grid-cols-6'>
                        <p className="font-extrabold">#</p>
                        <p className='col-span-3 font-extrabold'>Circuit</p>
                        <p className="font-extrabold">Wins</p>
                        <p className="font-extrabold">%</p>
                    </div>
                    {
                        topFiveCircuitsByWins(driver.grandPrixStats.circuits).map((circuit, index) => 
                            <div className='grid grid-cols-6'>
                                <p>{index + 1}</p>
                                <p className='col-span-3'>{circuit.gp}</p>
                                <p>{circuit.wins}</p>
                                <p>{((+circuit.wins / +circuit.races) * 100).toFixed(2)}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div id="circuits-by-poles" className={`rounded-2xl border-2 p-4 mt-10 ${props.currentConstructorStyles?.bgPrimary} ${props.currentConstructorStyles?.textPrimary}`}>
                <div className="grid grid-cols-2 mb-4">
                    <p className="font-bold text-xl">Top 5 Circuits by Poles</p>
                    <div className="grid grid-cols-5 gap-4 text-center">
                        <p className="col-span-2">Min Races: </p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topPolesByCircuitObj.active, '1')}`}
                            onClick={handleTopPolesByCircuitSelection}>1</p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topPolesByCircuitObj.active, '3')}`}
                            onClick={handleTopPolesByCircuitSelection}>3</p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topPolesByCircuitObj.active, '5')}`}
                            onClick={handleTopPolesByCircuitSelection}>5</p>
                    </div>
                </div>
                <div id="" className='grid text-center gap-4 mt-4'>
                    <div id="" className='grid grid-cols-6'>
                        <p className="font-extrabold">#</p>
                        <p className='col-span-3 font-bold'>Circuit</p>
                        <p className="font-extrabold">Poles</p>
                        <p className="font-extrabold">%</p>
                    </div>
                    {
                        topFiveCircuitsByPoles(driver.grandPrixStats.circuits).map((circuit, index) => 
                            <div className='grid grid-cols-6'>
                                <p>{index + 1}</p>
                                <p className='col-span-3'>{circuit.gp}</p>
                                <p>{circuit.poles}</p>
                                <p>{((+circuit.poles / +circuit.races) * 100).toFixed(2)}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div id="circuits-by-win-percentage" className={`rounded-2xl border-2 p-4 mt-10 ${props.currentConstructorStyles?.bgPrimary} ${props.currentConstructorStyles?.textPrimary}`}>
                <div className="grid grid-cols-2 mb-4">
                    <p className="font-bold text-xl">Top 5 Circuits by Win %</p>
                    <div className="grid grid-cols-5 gap-4 text-center">
                        <p className="col-span-2">Min Races: </p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topWinPercentageByCircuitObj.active, '1')}`}
                            onClick={handleTopWinPercentageByCircuitSelection}>1</p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topWinPercentageByCircuitObj.active, '3')}`}
                            onClick={handleTopWinPercentageByCircuitSelection}>3</p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topWinPercentageByCircuitObj.active, '5')}`}
                            onClick={handleTopWinPercentageByCircuitSelection}>5</p>
                    </div>
                </div>
                <div id="" className='grid text-center gap-4 mt-4'>
                    <div id="" className='grid grid-cols-6'>
                        <p className="font-extrabold">#</p>
                        <p className='col-span-3 font-extrabold'>Circuit</p>
                        <p className="font-extrabold">Wins / Races</p>
                        <p className="font-extrabold">%</p>
                    </div>
                    {
                        topFiveCircuitsByWinPercentage(driver.grandPrixStats.circuits).map((circuit, index) => 
                            <div className='grid grid-cols-6'>
                                <p>{index + 1}</p>
                                <p className='col-span-3'>{circuit.gp}</p>
                                <p>{circuit.wins} / {circuit.races}</p>
                                <p>{((+circuit.wins / +circuit.races) * 100).toFixed(2)}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div id="circuits-by-pole-percentage" className={`rounded-2xl border-2 p-4 mt-10 ${props.currentConstructorStyles?.bgPrimary} ${props.currentConstructorStyles?.textPrimary}`}>
                <div className="grid grid-cols-2 mb-4">
                    <p className="font-bold text-xl">Top 5 Circuits by Pole %</p>
                    <div className="grid grid-cols-5 gap-4 text-center">
                        <p className="col-span-2">Min Races: </p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topPolePercentageByCircuitObj.active, '1')}`}
                            onClick={handleTopPolePercentageByCircuitSelection}>1</p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topPolePercentageByCircuitObj.active, '3')}`}
                            onClick={handleTopPolePercentageByCircuitSelection}>3</p>
                        <p className={`bg-black text-white rounded-2xl cursor-pointer self-baseline ${isBadgeActive(topPolePercentageByCircuitObj.active, '5')}`}
                            onClick={handleTopPolePercentageByCircuitSelection}>5</p>
                    </div>
                </div>
                <div id="" className='grid text-center gap-4 mt-4'>
                    <div id="" className='grid grid-cols-6'>
                        <p className="font-extrabold">#</p>
                        <p className='col-span-3 font-extrabold'>Circuit</p>
                        <p className="font-extrabold">Poles / Races</p>
                        <p className="font-extrabold">%</p>
                    </div>
                    {
                        topFiveCircuitsByPolePercentage(driver.grandPrixStats.circuits).map((circuit, index) => 
                            <div className='grid grid-cols-6'>
                                <p>{index + 1}</p>
                                <p className='col-span-3'>{circuit.gp}</p>
                                <p>{circuit.poles} / {circuit.races}</p>
                                <p>{((+circuit.poles / +circuit.races) * 100).toFixed(2)}</p>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Overview;