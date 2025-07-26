import { BaseSyntheticEvent, JSX, useContext, useState } from "react";
import { IDriver, IDriverSeasonStats } from "../../common/interfaces/driver";
import { IConstructorContextProps } from "../../common/interfaces/context";
import ConstructorContext from "../../contexts/ConstructorContext";
import { IConstructorStyle } from "../../common/interfaces/constructor";
import { CommonTerms } from "../../common/constants/common";

interface ISeasonsProps {
    driver: IDriver;
    currentConstructorStyles: IConstructorStyle | null;
};

const Seasons = (props: ISeasonsProps): JSX.Element => {
    const driver = props.driver;
    const constructorsContext: IConstructorContextProps | null = useContext(ConstructorContext);
    const [activeStatBySeason, setActiveStatBySeason] = useState<CommonTerms>(CommonTerms.WINS);

    const constructBarGraph = (seasons: IDriverSeasonStats[]) => {
        const values = [...new Set(seasons.map(season => season[activeStatBySeason]))];
        values.sort((a, b) => Number(a) - Number(b));

        /**
         * Determines the index of the given value in the sorted stats array
         */
        const getValueIndex = (val: string) => {
            let leftIdx = 0, rightIdx = values.length - 1;
            while (leftIdx <= rightIdx) {
                const mid = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
                if (Number(values[mid]) == Number(val)) return mid + 1;
                if (Number(values[mid]) > Number(val)) rightIdx = mid - 1;
                else leftIdx = mid + 1;
            }
            return 1;
        };

        return (
            <div id="graph" className="flex gap-4 items-end h-[40rem] w-fit mx-auto">
                <div id="y-axis" className={`mb-[2.5rem]`}>
                    <div>
                        {
                            [...values].reverse().map(value => <div className="mb-[2rem] h-[2rem]">{value}</div>)
                        }
                    </div>
                </div>
                <div id="x-axis" className="flex items-end gap-6">
                    {
                        seasons.map(season => {
                            return (
                                <div id="graph-item" className="group relative">
                                    <div style={{height: `${(getValueIndex(season[activeStatBySeason])) * 2 + ((2 * getValueIndex(season[activeStatBySeason]))) }rem`}}
                                        className={`bg-[wheat] w-[2rem] cursor-pointer text-black text-center hover:bg-[tan]`}>
                                            <div className="invisible group-hover:visible absolute -top-12 bg-black text-white text-lg rounded w-[2rem]">
                                                <p className="text-center">{season[activeStatBySeason]}</p>
                                            </div>
                                    </div>
                                    <div className={`text-center mt-[1rem] font-semibold h-[1.5rem]`}>
                                        {season.year}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    };

    /**
     * Updates the active 'Stats By Season' tab.
     */
    const handleStatsBySeasonTabSelect = (event: BaseSyntheticEvent) => {
        setActiveStatBySeason(event.target.textContent);
    };

    /**
     * Returns the relevant Tailwind classes for 'Stats By Season' tabs.
     */
    const statsBySeasonTabStyle = (tab: CommonTerms) => {
        if (activeStatBySeason === tab) return `bg-gray-400 text-white`;
        return `bg-black text-white`;
    };

    return (
        <div id="driver-seasons" className="grid grid-cols-1">

            <div id="stats-by-season-graph-container" className="rounded-2xl border-black border-4 p-4 mt-10 bg-[rgb(32_33_36)]">
                <div id="header" className={`grid grid-cols-2 items-baseline pb-20`}>
                    <p className="font-bold text-xl">Stats By Season</p>
                    <div id="stats-by-season-tab-container" className="text-center grid grid-cols-5 gap-4">
                        <div className={`bg-black text-white rounded-2xl cursor-pointer ${statsBySeasonTabStyle(CommonTerms.WINS)}`} onClick={handleStatsBySeasonTabSelect}>{CommonTerms.WINS}</div>
                        <div className={`bg-black text-white rounded-2xl cursor-pointer ${statsBySeasonTabStyle(CommonTerms.POLES)}`} onClick={handleStatsBySeasonTabSelect}>{CommonTerms.POLES}</div>
                        <div className={`bg-black text-white rounded-2xl cursor-pointer ${statsBySeasonTabStyle(CommonTerms.PODIUMS)}`} onClick={handleStatsBySeasonTabSelect}>{CommonTerms.PODIUMS}</div>
                        <div className={`bg-black text-white rounded-2xl cursor-pointer ${statsBySeasonTabStyle(CommonTerms.RACES)}`} onClick={handleStatsBySeasonTabSelect}>{CommonTerms.RACES}</div>
                        <div className={`bg-black text-white rounded-2xl cursor-pointer ${statsBySeasonTabStyle(CommonTerms.POSITION)}`} onClick={handleStatsBySeasonTabSelect}>{CommonTerms.POSITION}</div>
                    </div>
                </div>
                {
                    
                    constructBarGraph(driver.seasons)
                }
            </div>

            <div id="models-driven" className="rounded-2xl border-black border-4 p-4 mt-10 bg-[rgb(32_33_36)]">
                <p className="font-bold text-xl mb-4">Cars driven ({driver.carModelsDriven.length})</p>
                <div id="" className='grid text-center gap-4 mt-4 h-[30rem] px-4 overflow-auto'>
                    <div id="" className='grid grid-cols-6 font-semibold'>
                        <p>#</p>
                        <p className='col-span-3'>Constructor</p>
                        <p>Model</p>
                        <p>Year</p>
                    </div>
                    {
                        driver.carModelsDriven.map((carModel, index) => 
                            <div className={`grid grid-cols-6 items-center rounded-2xl p-1 h-[4rem]
                                ${constructorsContext?.getConstructorStylesById(carModel.constructorId)?.bgPrimary}
                                ${constructorsContext?.getConstructorStylesById(carModel.constructorId)?.textPrimary}
                                `}
                            >
                                <p>{driver.carModelsDriven.length - index}</p>
                                <p className='col-span-3'>{constructorsContext?.getConstructorById(carModel.constructorId)?.name ?? ''}</p>
                                <p>{carModel.modelName}</p>
                                <p>{carModel.year}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Seasons;