import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import Found from "./Found";
import Filter from "./Filter";
import PlanetsList from "./PlanetsList";

function App() {


    return (
        <div className="App">
            <h1>Planets</h1>
            <Filter />
            <div className="Planets">
                <Found number={0}/>
                <div className="Planets-list">
                    <PlanetsList />
                </div>
            </div>
        </div>
    );
}
export default App;

const rootElement = document.getElementById("root");
render(<App />, rootElement);
