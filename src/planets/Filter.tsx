import React from 'react';
import InputField from './InputField';


function Filter() {
    return (
        <div className="Filters">
            <div className="Filter">
                <span>Name</span>
                <InputField placeholder={"from"} text={""}/>
            </div>
            <div className="Filter">
                <span>Rotation period </span>
                <InputField placeholder={"from"} text={""}/>
                <InputField placeholder={"to"} text={""}/>
            </div>
            <div className="Filter">
                <span>Population</span>
                <InputField placeholder={"from"} text={""}/>
                <InputField placeholder={"to"} text={""}/>
            </div>
        </div>
    );
}
export default Filter;
