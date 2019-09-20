import React from 'react';
import {NavLink} from 'react-router-dom';

type CardProps = {
   planet: Planet;
    }

export type Planet = {
    planetName: string;
    planetURL: string;
    rotation: number;
    population: number;
    residents: number;
    residentsURL: string;
}

function CardComposer({planet}: CardProps) {

    return (

       <div className="Planet">
           <NavLink className="Planet--name" to={planet.planetURL}>{planet.planetName}</NavLink>
           <ul className="Planet--data">
               <li>Rotation period: <span>{planet.rotation}</span></li>
               <li>Population: <span>{planet.population}</span></li>
               <li>Residents: <NavLink to={planet.residentsURL}>{planet.residents}</NavLink></li>
           </ul>
       </div>
    );
}
export default CardComposer;
