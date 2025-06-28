import './App.css';
import { DRIVER_WINS } from './data/driverWins';

const App = () => {

  return (
    <div id="main" className='bg-[rgb(21_21_22)] h-[inherit]'>
        <div id="title" className='pt-6 text-center'>
          <p className='text-2xl text-white'>F1 Vision</p>
        </div>

        <div id="body">

          <div id="driver-wins" className='w-[40rem] bg-[rgb(32_33_36)] rounded-2xl p-2 m-20'>
            <div id="header" className='ml-2 mt-1'>
              <h3 className='font-semibold'>Top 10 Driver Wins</h3>
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
                        <p className='col-span-3'>{obj.driver}</p>
                        <p>{obj.wins}</p>
                        <p>{obj.percentage}</p>
                    </div>
                  )
                }
            </div>
          </div>
        </div>
    </div>
  )
};

export default App;
