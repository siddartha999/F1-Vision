import { createContext } from 'react';
import { IDriverContextProps } from '../common/interfaces/context';

const DriverContext = createContext<IDriverContextProps | null>(null);

export default DriverContext;