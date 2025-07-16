import { Route, Routes } from 'react-router';
import './App.css';
import DriverProfile from './pages/DriverProfile/DriverProfile';
import Summary from './components/Summary/Summary';
import useConstructors from './hooks/useConstructors';
import ConstructorContext from './contexts/ConstructorContext';

const App = () => {
  const constructorsContext = useConstructors();
  return (
    <div id="main" className='bg-[rgb(21_21_22)] h-[inherit] overflow-auto'>
        <div id="title" className='pt-6 text-center'>
          <p className='text-2xl text-white'>F1 Vision</p>
        </div>
        <ConstructorContext.Provider value={constructorsContext}>
          <Routes>
            <Route path="/" element={<Summary />}></Route>
              <Route path="/driver" element={<DriverProfile /> }> </Route>
          </Routes>
        </ConstructorContext.Provider>
    </div>
  )
};

export default App;
