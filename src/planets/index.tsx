import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
    return (
        <div className="App">
            <h1>Planets</h1>
            <div className="Filters">
                <div className="Filter">
                    <span>Name</span>
                    <input className="normal-input" type="text" placeholder="from" />
                </div>
                <div className="Filter">
                    <span>Rotation period</span>
                    <input type="text" placeholder="from" />
                    <input type="text" placeholder="to" />
                </div>
                <div className="Filter">
                    <span>Population</span>
                    <input type="text" placeholder="from" />
                    <input type="text" placeholder="to" />
                </div>
            </div>
            <div className="Planets">
                <div className="Statistics">Found: 4 planets</div>
                <div className="Planets-list">
                    <div className="Planet">
                        <div className="Planet--name">Kamino</div>
                        <div className="Planet--data">
                            Rotation period: 27
                            <br />
                            Population: 1000000
                            <br />
                            Residents: 3
                        </div>
                    </div>
                    <div className="Planet">
                        <div className="Planet--name">Kamino</div>
                        <div className="Planet--data">
                            Rotation period: 27
                            <br />
                            Population: 1000000
                            <br />
                            Residents: 3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
