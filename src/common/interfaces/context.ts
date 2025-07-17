import { IConstructor } from "./constructor";
import { IDriver } from "./driver";

export interface IConstructorContextProps {
    getConstructorById: (constructorId: string) => IConstructor | null;
    getConstructorThemeById: (constructorId: string) => string;
}


export interface IDriverContextProps {
    getDriverById: (driverId: string) => IDriver | null;
}