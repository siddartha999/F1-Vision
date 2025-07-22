import { JSX, useContext } from "react";
import { IDriver } from "../../common/interfaces/driver";
import { IConstructorContextProps } from "../../common/interfaces/context";
import ConstructorContext from "../../contexts/ConstructorContext";

interface ISeasonsProps {
    driver: IDriver;
};

const Seasons = (props: ISeasonsProps): JSX.Element => {
    const driver = props.driver;
    const constructorsContext: IConstructorContextProps | null = useContext(ConstructorContext);

    return (
        <div id="driver-seasons" className="grid grid-cols-1">
            <div id="models-driven" className="rounded-2xl p-2 mt-10 bg-[rgb(32_33_36)] py-4">
                <p className="font-bold text-xl mb-4">Cars driven ({driver.carModelsDriven.length})</p>
                <div id="" className='grid text-center gap-4 mt-4 h-[30rem] px-4 overflow-auto'>
                    <div id="" className='grid grid-cols-6'>
                        <p>#</p>
                        <p className='col-span-3'>Constructor</p>
                        <p>Model</p>
                        <p>Year</p>
                    </div>
                    {
                        driver.carModelsDriven.map((carModel, index) => 
                            <div className={`grid grid-cols-6 rounded-2xl ${constructorsContext?.getConstructorStylesById(carModel.constructorId)} p-1`}>
                                <p>{driver.carModelsDriven.length - index}</p>
                                <p className='col-span-3 font-bold'>{constructorsContext?.getConstructorById(carModel.constructorId)?.name ?? ''}</p>
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