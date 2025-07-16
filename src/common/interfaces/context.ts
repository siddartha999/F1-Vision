import { IConstructor } from "./constructor";

export interface IConstructorContextProps {
    getConstructorById: (constructorId: string) => IConstructor | null;
}