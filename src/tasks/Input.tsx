import React from 'react';


type InputProps = {
    task: string;
    addNew:(text:string)=>void;
}
function Input(props: InputProps) {
    return (
        <p>{props.task}</p>
    );
}
export default Input;
