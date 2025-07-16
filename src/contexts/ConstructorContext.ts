import { createContext } from 'react';
import { IConstructorContextProps } from '../common/interfaces/context';

const ConstructorContext = createContext<IConstructorContextProps | null>(null);

export default ConstructorContext;