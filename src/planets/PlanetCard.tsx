import React from 'react';

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
           <a className="Planet--name" href={"props.planetURL"}>{props.planetName}</a>
           <ul className="Planet--data">
               <li>Rotation period: <span>{props.rotation}</span></li>
               <li>Population: <span>{props.population}</span></li>
               <li>Residents: <a href={"residentsURL"}>{props.residents}</a></li>
           </ul>
       </div>
    );
}
export default CardComposer;
