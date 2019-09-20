import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './planets/styles.css'
import App from './planets/App';
import ToDo from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from "./planets/Store";

import * as serviceWorker from './serviceWorker';

let planets = [
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

const store = createStore(reducers);

/*ReactDOM.render(<App />, document.getElementById('root')); */

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
