export interface AddUnits{
    name: string,
    init: number,
    dex: number;
    dexMod: number;
    index: number;
    dead: boolean;
    deathSaves: number;
    deathFails: number;
    conditions: string[];
}