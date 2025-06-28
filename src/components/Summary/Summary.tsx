import { CONSTRUCTOR_WINS, DRIVER_WINS } from "../../data/wins";

const Summary = () => {
    return (
        <div id="body">
            <div id="summary" className='flex flex-wrap justify-between'>
                <div id="driver-wins" className='w-[35em] bg-[rgb(32_33_36)] rounded-2xl p-2 m-20'>
                    <div id="header" className='ml-2 mt-1'>
                    <h3 className='font-semibold'>Top 10 Drivers By Wins</h3>
                    </div>
                    <div id="body" className='grid text-center gap-4 mt-4'>
                        <div id="driver-wins" className='grid grid-cols-6'>
                        <p></p>
                        <p className='col-span-3'>Driver</p>
                        <p>Wins</p>
                        <p>%</p>
                        </div>
                        {
                        DRIVER_WINS.map((obj, index) => 
                            <div className='grid grid-cols-6'>
                                <p>{index + 1}</p>
                                <p className='col-span-3 font-bold'>{obj.driver}</p>
                                <p>{obj.wins}</p>
                                <p>{obj.percentage}</p>
                            </div>
                        )
                        }
                    </div>
                </div>
                <div id="constructor-wins" className='w-[35rem] bg-[rgb(32_33_36)] rounded-2xl p-2 m-20'>
                    <div id="header" className='ml-2 mt-1'>
                    <h3 className='font-semibold'>Top 10 Constructors By Wins</h3>
                    </div>
                    <div id="body" className='grid text-center gap-4 mt-4'>
                        <div id="constructor-wins" className='grid grid-cols-6'>
                        <p></p>
                        <p className='col-span-3'>Constructor</p>
                        <p>Wins</p>
                        <p>%</p>
                        </div>
                        {
                        CONSTRUCTOR_WINS.map((obj, index) => 
                            <div className='grid grid-cols-6'>
                                <p>{index + 1}</p>
                                <p className='col-span-3 font-bold'>{obj.constructor}</p>
                                <p>{obj.wins}</p>
                                <p>{obj.percentage}</p>
                            </div>
                        )
                        }
                    </div>
                </div>
        </div>
    </div>
    );
};

export default Summary;