export type Planet = {
    planetName: string;
    planetURL: string;
    rotation: number;
    population: number;
    residents: number;
    residentsURL: string;
}
export type State = {
    planets: Planet[];
};
