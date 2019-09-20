import {Planet} from "../../PlanetCard";

type AddPlanet = {
    type: "ADD_PLANET";
    payload: Planet;
}
type DeletePlanet = {
    type: "DELETE_PLANET";
    payload: string;
}
type Actions = AddPlanet | DeletePlanet;

export const addPlanet = (planet: Planet):AddPlanet => ( {
    type: "ADD_PLANET",
    payload: planet,
} );

const initialState = [
    {
        planetName: "Kamino",
        planetURL: "",
        population: 100000,
        residents: 3,
        residentsURL:"",
        rotation: 27,
    },
    {
        planetName: "Kamino",
        planetURL: "",
        population: 100000,
        residents: 3,
        residentsURL:"",
        rotation: 27,
    },
];

export const planetReducer = (state = initialState, action:Actions) => {
    switch (action.type) {
        case "ADD_PLANET":
            return [...state, action.payload];
        case "DELETE_PLANET":
            return state;

    }

    return state;
};
