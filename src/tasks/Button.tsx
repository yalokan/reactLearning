import React from 'react';

type ButtonProps = {
    text: string;
    handler: () => void;
}
function Button(props: ButtonProps){
        return(
            <div>
            <button onClick={props.handler}>{props.text}</button>
            </div>
        )
  }
export default Button;
