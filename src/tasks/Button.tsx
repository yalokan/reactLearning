import React from 'react';

type ButtonProps = {
    text: string;
    handler: () => void;
}
function Button(props: ButtonProps){
        return(
            <button onClick={props.handler}>{props.text}</button>
        )
  }
export default Button;
