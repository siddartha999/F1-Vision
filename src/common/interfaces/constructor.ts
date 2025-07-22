export interface IConstructor {
    id: string;
    name: CONSTRUCTOR;
}

export enum CONSTRUCTOR {
    FERRARI = "Ferrari",
    MERCEDES = "Mercedes",
    MCLAREN = "Mclaren",
    REDBULL = "Red Bull Racing"
}

export interface IConstructorStyle {
    bgPrimary: string;
    textPrimary: string;
    bgRounded?: string;
    textRounded?: string;
}