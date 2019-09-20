import {combineReducers} from 'redux';
import {planetReducer} from "./Planets/Actions";

export const reducers = combineReducers({planets: planetReducer});
