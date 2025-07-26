import { JSX, useContext } from "react";
import { IDriver, IDriverSeasonStats } from "../../common/interfaces/driver";
import { IConstructorContextProps } from "../../common/interfaces/context";
import ConstructorContext from "../../contexts/ConstructorContext";
import { IConstructorStyle } from "../../common/interfaces/constructor";

interface ISeasonsProps {
    driver: IDriver;
    currentConstructorStyles: IConstructorStyle | null;
};

const Seasons = (props: ISeasonsProps): JSX.Element => {
    const driver = props.driver;
    const constructorsContext: IConstructorContextProps | null = useContext(ConstructorContext);

    const constructBarGraph = (seasons: IDriverSeasonStats[]) => {
        const range = {
            min: Number.MAX_SAFE_INTEGER,
            max: Number.MIN_SAFE_INTEGER
        };
        for (let idx = 0; idx < seasons.length; idx++) {
            const num = Number(seasons[idx].wins);
            if (range.min > num) range.min = num;
            if (range.max < num) range.max = num;
        }

        return (
            <div id="graph" className="flex items-end gap-6 ">
                {
                    seasons.map(season => {
                        return (
                            <div id="graph-item">
                                <div style={{height: `${(Number(season.wins) + 0.1) * 2}rem`}} className={`bg-blue-700 w-[2rem] cursor-pointer`}>
                                </div>
                                <div className={`text-center mt-2 font-semibold`}>
                                    {season.year}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    };

    return (
        <div id="driver-seasons" className="grid grid-cols-1">

            <div id="position-by-season-graph" className="rounded-2xl border-black border-4 p-4 mt-10 bg-[rgb(32_33_36)]">
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