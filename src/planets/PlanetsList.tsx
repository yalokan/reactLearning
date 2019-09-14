import React from 'react';
import CardComposer from "./PlanetCard";

const PlanetsList = () => {
    return(
    <CardComposer
                  planetName={"Kamino"}
                  planetURL={""}
                  population={100000}
                  residents={3}
                  residentsURL={""}
                  rotation={27}
    />

    );
};
export default PlanetsList;
