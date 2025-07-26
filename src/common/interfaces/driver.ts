import { TITLES } from "./awards";

export interface IDriver {
    id: string;
    firstName: string;
    lastName?: string;
    dob: string;
    nationality: string;
    isActive: boolean;
    currentConstructorId: string;
    number?: string;
    height?: string;
    driverTitles: string;
    constructorTitles: string;
    points: string;
    bio: string[];
    grandSlams: string;
    grandPrixStats: IDriverGPStats;
    constructorIds: string[];
    titles: IDriverTitles[];
    carModelsDriven: IDriverCarModel[];
    seasons: IDriverSeasonStats[];
}


export interface IDriverGPStats {
    wins: string;
    poles: string;
    races: string;
    podiums: string;
    fastestLaps: string;
    retirements: string;
    circuits: IDriverAtCircuit[]
}


export interface IDriverAtCircuit {
    gp: string;
    races: string;
    wins: string;
    poles: string;
    fastestLaps: string;
    podiums: string;
    points: string;
    lapsLed: string;
    kmsLed?: string;
}

interface IDriverTitles {
    type: TITLES;
    details: 
        {
            constructorId: string,
            year: string
        }[]
    
}

export interface IDriverCarModel {
    constructorId: string;
    modelName: string;
    year: string;
}

export interface IDriverSeasonStats {
    year: string;
    constructorId: string;
    engineId: string;
    position: string;
    races: string;
    wins: string;
    poles: string;
    fastestLaps: string;
    podiums: string;
    points: string;
    lapsLed: string;
    kmsLed: string;
    totalLaps: string;
    totalKms: string;
}