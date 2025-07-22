import { IConstructor, IConstructorStyle } from "./constructor";
import { IDriver } from "./driver";

export interface IConstructorContextProps {
    getConstructorById: (constructorId: string) => IConstructor | null;
    getConstructorStylesById: (constructorId: string) => IConstructorStyle | null;
}


export interface IDriverContextProps {
    getDriverById: (driverId: string) => IDriver | null;
    getDriverByFullName: (driverName: string) => IDriver | null;
}