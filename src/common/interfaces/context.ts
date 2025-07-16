import { IConstructor } from "./constructor";
import { IDriver } from "./driver";

export interface IConstructorContextProps {
    getConstructorById: (constructorId: string) => IConstructor | null;
}


export interface IDriverContextProps {
    getDriverById: (driverId: string) => IDriver | null;
}