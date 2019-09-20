import React from 'react';
import CardComposer, { Planet } from "./PlanetCard";

type PlanetsListProps = {
    planets: Planet[];
    add: (planet: Planet) => void;
}

const PlanetsList = (props: PlanetsListProps) => {
    const newPlanet =  {
            planetName: "Kamino",
            planetURL: "",
            population: 100000,
            residents: 3,
            residentsURL:"",
            rotation: 27,
        };

    return(<>
        {props.planets.map((planet, i) =>  <CardComposer planet={planet} key={i} />)}
        <div onClick={() => props.add(newPlanet)}>
            Add Planet
        </div>
    </>);
};
export default PlanetsList;
