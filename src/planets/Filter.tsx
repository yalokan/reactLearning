import React from 'react';

import FilterField from "./FilterField";

type FilterState = {
    nameFrom: string,
    rotationFrom: string,
    rotationTo: string,
    populationFrom: string,
    populationTo: string,
    text: string,
}

class Filter extends React.Component {

    state: FilterState = {
        nameFrom: "",
        rotationFrom: "",
        rotationTo: "",
        populationFrom: "",
        populationTo: "",
        text: "",
    };
    onInputChange = (fieldName: string) => (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({[fieldName]: e.currentTarget.value});
        console.log(this.state.nameFrom);
    };
  render() {

      return (
          <div className="Filters">
              <div className="Filter">
                  <span>Name</span>
                  <FilterField placeholder={"from"} handler={this.onInputChange("nameFrom")} value={this.state.nameFrom}/>
              </div>
              <div className="Filter">
                  <span>Rotation period </span>
                  <FilterField placeholder={"from"} handler={this.onInputChange("rotationFrom")} value={this.state.rotationFrom}/>
                  <FilterField placeholder={"from"} handler={this.onInputChange("rotationTo")} value={this.state.rotationTo}/>

              </div>
              <div className="Filter">
                  <span>Population</span>
                  <FilterField placeholder={"from"} handler={this.onInputChange("populationFrom")} value={this.state.populationFrom}/>
                  <FilterField placeholder={"from"} handler={this.onInputChange("populationTo")} value={this.state.populationTo}/>
              </div>
          </div>
      );
  }
}
export default Filter;
