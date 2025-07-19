import { Route, Routes } from 'react-router';
import './App.css';
import DriverProfile from './pages/DriverProfile/DriverProfile';
import Summary from './components/Summary/Summary';
import useConstructors from './hooks/useConstructors';
import ConstructorContext from './contexts/ConstructorContext';
import useDrivers from './hooks/useDrivers';
import DriverContext from './contexts/DriverContext';

const App = () => {
  const constructorsContext = useConstructors();
  const driversContext = useDrivers();

  return (
    <div id="main" className='bg-[rgb(21_21_22)] h-[inherit] overflow-auto pb-[5rem]'>
        <div id="title" className='pt-6 text-center'>
          <p className='text-2xl text-white'>F1 Vision</p>
        </div>
        <ConstructorContext.Provider value={constructorsContext}>
          <DriverContext.Provider value={driversContext}>
            <Routes>
              <Route path="/" element={<Summary />}></Route>
                <Route path="/driver/:id" element={<DriverProfile /> }> </Route>
            </Routes>
          </DriverContext.Provider>
        </ConstructorContext.Provider>
    </div>
  )
};

export default App;
