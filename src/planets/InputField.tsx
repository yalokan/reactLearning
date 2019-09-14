import React from 'react';
type InputProps = {
    text: string;
    placeholder: string;
   }
 const InputField = (props: InputProps) => {
    return <input type={"text"} placeholder={props.placeholder}>{props.text}</input>
};
export default InputField;
