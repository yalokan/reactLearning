import React from 'react';
import {NavLink} from 'react-router-dom';

type CardProps = {
    planetName: string;
    planetURL: string;
    rotation: number;
    population: number;
    residents: number;
    residentsURL: string;
    }
function CardComposer(props: CardProps) {

    return (

       <div className="Planet">
           <NavLink className="Planet--name" to={props.planetURL}>{props.planetName}</NavLink>
           <ul className="Planet--data">
               <li>Rotation period: <span>{props.rotation}</span></li>
               <li>Population: <span>{props.population}</span></li>
               <li>Residents: <NavLink to={props.residentsURL}>{props.residents}</NavLink></li>
           </ul>
       </div>
    );
}
export default CardComposer;
