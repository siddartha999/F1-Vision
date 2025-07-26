import { JSX, useContext } from "react";
import { IDriver } from "../../common/interfaces/driver";
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

    return (
        <div id="driver-seasons" className="grid grid-cols-2">
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