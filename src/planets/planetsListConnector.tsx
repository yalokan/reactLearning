import {connect} from "react-redux";
import PlanetsList from "./PlanetsList";
import * as Type from "./types";
import {selectPlanets} from "./Store/Planets/selectors"
import {Dispatch} from "react";
import {addPlanet} from "./Store/Planets/Actions";


const mapStateToProps = (state: Type.State) => {
    return {
        planets: selectPlanets(state),
    }

};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        add: (planet: Type.Planet) => dispatch(addPlanet(planet))
    }
};

export const PlanetsListConnected = connect(mapStateToProps, mapDispatchToProps)(PlanetsList);

