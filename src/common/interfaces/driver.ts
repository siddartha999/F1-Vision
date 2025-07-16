import { Titles } from "./awards";

export interface IDriver {
    id: string;
    firstName: string;
    lastName?: string;
    dob: string;
    nationality: string;
    isActive: boolean;
    currentTeamId: string;
    number?: string;
    height?: string;
    driverTitles: string;
    constructorTitles: string;
    points: string;
    bio: string[];
    grandPrixStats: IDriverGPStats;
    teamsIds: string[];
    titles: IDriverTitles[];
}


export interface IDriverGPStats {
    wins: string;
    poles: string;
    races: string;
    podiums: string;
    fastestLaps: string;
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
    type: Titles;
    details: 
        {
            constructorId: string,
            year: string
        }[]
    
}