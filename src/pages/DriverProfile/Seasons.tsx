import { BaseSyntheticEvent, JSX, useContext, useState } from "react";
import { IDriver, IDriverSeasonStats } from "../../common/interfaces/driver";
import { IConstructorContextProps } from "../../common/interfaces/context";
import ConstructorContext from "../../contexts/ConstructorContext";
import { IConstructorStyle } from "../../common/interfaces/constructor";
import { CommonTerms } from "../../common/constants/common";
import { capitalizeFirstLetter } from "../../common/utils/Utils";

interface ISeasonsProps {
    driver: IDriver;
    currentConstructorStyles: IConstructorStyle | null;
};

const enum BarGraphMode {
    DEFAULT = 'Default',
    BY_CONSTRUCTOR = 'By Constructor'
}

const Seasons = (props: ISeasonsProps): JSX.Element => {
    const driver = props.driver;
    const constructorsContext: IConstructorContextProps | null = useContext(ConstructorContext);
    const [activeStatBySeason, setActiveStatBySeason] = useState<CommonTerms>(CommonTerms.WINS);
    const [activeStatBySeasonBarGraphMode, setActiveStatBySeasonBarGraphMode] = useState<BarGraphMode>(BarGraphMode.DEFAULT);

    /**
     * Updates the BarGraph mode in the 'Stats By Season' widget.
     */
    const handleSelectActiveStatBySeasonBarGraphMode = (event: BaseSyntheticEvent) => {
        setActiveStatBySeasonBarGraphMode(event.target.textContent);
    };

    /**
     * Returns the relevant Tailwind classes for BarGraph mode in the 'Stats By Season'  widget.
     */
    const statsBySeasonBarGraphModeStyle = (mode: BarGraphMode) => {
        if (activeStatBySeasonBarGraphMode === mode) return `bg-gray-400 text-white`;
        return `bg-black text-white`;
    };

    /**
     * Constructs a BarGraph in the 'Stats By Season' widget.
     */
    const constructBarGraph = (seasons: IDriverSeasonStats[]) => {
        const values = [...new Set(seasons.map(season => season[activeStatBySeason]))];
        values.sort((a, b) => Number(a) - Number(b));

        const uniqueConstructorIds = [...new Set(seasons.map(season => season.constructorId))];

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

        /**
         * Returns the style of an individual Bar in BarGraph
         */
        const barStyle = (season: IDriverSeasonStats) => {
            return `${activeStatBySeasonBarGraphMode === BarGraphMode.BY_CONSTRUCTOR ? 
                        `${constructorsContext?.getConstructorStylesById(season.constructorId)?.bgPrimary}
                        ${constructorsContext?.getConstructorStylesById(season.constructorId)?.bgHover}` 
                        : `bg-[wheat] hover:bg-[tan]`}`
        };

        return (
            <div id="bar-graph-container" className="grid items-start xl:grid-rows-1 xl:grid-cols-6 w-fit mx-auto text-sm xl:text-lg pb-[1rem]">
                <div id="graph" className="lg:col-span-5 flex gap-2 lg:gap-4 xl:gap-6">
                    <div id="y-axis" className={`mb-[2.5rem]`}>
                        <div>
                            {
                                [...values].reverse().map(value => <div className="mb-[2rem] h-[2rem]">{value}</div>)
                            }
                        </div>
                    </div>
                    <div id="x-axis" className="flex items-end gap-0 md:gap-2 lg:gap-4 2xl:gap-6">
                        {
                            seasons.map(season => {
                                return (
                                    <div id="graph-item" className="group relative">
                                        <div style={{height: `${(getValueIndex(season[activeStatBySeason])) * 2 + ((2 * getValueIndex(season[activeStatBySeason]))) }rem`}}
                                            className={`${barStyle(season)} w-[0.25rem] md:w-[1rem] xl:w-[2rem] cursor-pointer text-black text-center`}>
                                                <div className="invisible group-hover:visible absolute -top-12 bg-black text-white rounded w-[2rem]">
                                                    <p className="text-center">{season[activeStatBySeason]}</p>
                                                </div>
                                        </div>
                                        <div className={`text-center mt-[0.5rem] md:mt-[1rem] font-semibold h-[1.5rem] w-[1.25rem]`}>
                                            <p className="transform rotate-90 xl:rotate-0 relative left-[-0.25rem]">{season.year}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div id="bar-graph-options" className="grid items-start gap-2 xl:gap-0 grid-rows-2 grid-cols-2 xl:grid-rows-3 xl:grid-cols-1 self-center mt-[3rem] xl:mt-0 ml-[0.25rem] xl:ml-[1.5rem] 2xl:ml-[3rem] cursor-pointer">
                    <div id="default-mode" className={`text-center font-semibold`}
                        onClick={handleSelectActiveStatBySeasonBarGraphMode}>
                        <p className={`py-1 px-4 rounded-2xl ${statsBySeasonBarGraphModeStyle(BarGraphMode.DEFAULT)}`}>{BarGraphMode.DEFAULT}</p>
                    </div>
                    <div id="constructor-mode" className={`text-center font-semibold`}
                        onClick={handleSelectActiveStatBySeasonBarGraphMode}>
                        <p className={`py-1 px-4 rounded-2xl ${statsBySeasonBarGraphModeStyle(BarGraphMode.BY_CONSTRUCTOR)}`}>{BarGraphMode.BY_CONSTRUCTOR}</p>
                    </div>
                    <div id="constructor-legends" className={`flex flex-wrap gap-4 xl:block mt-[0.75rem] xl:mt-0
                        ${activeStatBySeasonBarGraphMode === BarGraphMode.BY_CONSTRUCTOR ? 'visible' : 'invisible'}`}>
                        {
                            uniqueConstructorIds.map(uniqueConstructorId => {
                                return (
                                    <div className="flex gap-2 rounded-2xl mb-2 ml-1.5">
                                        <div className={`${constructorsContext?.getConstructorStylesById(uniqueConstructorId)?.bgPrimary} px-4 py-2`}> </div>
                                        <div className="ml-2">{constructorsContext?.getConstructorById(uniqueConstructorId)?.name}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    };

    /**
     * Updates the active 'Stats By Season' widget's tab.
     */
    const handleStatsBySeasonTabSelect = (event: BaseSyntheticEvent) => {
        setActiveStatBySeason(event.target.textContent.toLocaleLowerCase());
    };

    /**
     * Returns the relevant Tailwind classes for 'Stats By Season' widget's tabs.
     */
    const statsBySeasonTabStyle = (tab: CommonTerms) => {
        if (activeStatBySeason === tab) return `bg-gray-400 text-white`;
        return `bg-black text-white`;
    };

    return (
        <div id="driver-seasons" className="grid grid-cols-1">

            <div id="stats-by-season-graph-container" className="rounded-2xl border-black border-4 p-4 mt-10 bg-[rgb(32_33_36)]">
                <div id="header" className={`flex justify-between gap-8 items-baseline pb-[10rem]`}>
                    <p className="font-bold text-xl text-nowrap">Stats By Season</p>
                    <div id="stats-by-season-tab-container" className="text-center grid grid-rows-5 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-5 gap-4">
                        <div className={`bg-black text-white px-12 py-0.75 rounded-2xl cursor-pointer ${statsBySeasonTabStyle(CommonTerms.WINS)}`} onClick={handleStatsBySeasonTabSelect}>{capitalizeFirstLetter(CommonTerms.WINS)}</div>
                        <div className={`bg-black text-white px-12 py-0.75 rounded-2xl cursor-pointer ${statsBySeasonTabStyle(CommonTerms.POLES)}`} onClick={handleStatsBySeasonTabSelect}>{capitalizeFirstLetter(CommonTerms.POLES)}</div>
                        <div className={`bg-black text-white px-12 py-0.75 rounded-2xl cursor-pointer ${statsBySeasonTabStyle(CommonTerms.PODIUMS)}`} onClick={handleStatsBySeasonTabSelect}>{capitalizeFirstLetter(CommonTerms.PODIUMS)}</div>
                        <div className={`bg-black text-white px-12 py-0.75 rounded-2xl cursor-pointer ${statsBySeasonTabStyle(CommonTerms.RACES)}`} onClick={handleStatsBySeasonTabSelect}>{capitalizeFirstLetter(CommonTerms.RACES)}</div>
                        <div className={`bg-black text-white px-12 py-0.75 rounded-2xl cursor-pointer ${statsBySeasonTabStyle(CommonTerms.POSITION)}`} onClick={handleStatsBySeasonTabSelect}>{capitalizeFirstLetter(CommonTerms.POSITION)}</div>
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