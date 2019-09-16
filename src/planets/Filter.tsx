import React from 'react';

import FilterField from "./FilterField";

type FilterState = {
    nameFrom: string,
    rotationFrom: number,
    rotationTo: number,
    populationFrom: number,
    populationTo: number,
    text: string,
}

class Filter extends React.Component {

    state: FilterState = {
        nameFrom: "",
        rotationFrom: 0,
        rotationTo: 0,
        populationFrom: 0,
        populationTo: 0,
        text: "",
    };
    onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
          console.log({e });
        this.setState({text: e.currentTarget.value});

    };
  render() {

      return (
          <div className="Filters">
              <div className="Filter">
                  <span>Name</span>
                  <FilterField placeholder={"from"} handler={this.onInputChange}/>
              </div>
              <div className="Filter">
                  <span>Rotation period </span>
                  {/*<FilterField placeholder={"from"}/>*/}
                  {/*<FilterField placeholder={"to"}/>*/}

              </div>
              <div className="Filter">
                  <span>Population</span>
                  {/*<FilterField placeholder={"from"}/>*/}
                  {/*<FilterField placeholder={"to"}/>*/}
              </div>
          </div>
      );
  }
}
export default Filter;
