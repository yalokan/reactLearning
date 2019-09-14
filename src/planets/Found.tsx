import React from 'react';


type FoundProps = {
    number: number;
    }
function Found(props: FoundProps) {
    return (
        <p>Found: {props.number} planets</p>
    );
}
export default Found;
