import React from 'react';


type TaskProps = {
    active: boolean;
    text: string;
    handler: () => void;
}
function Task(props: TaskProps) {
    const deleted = <p onClick={props.handler}><del>{props.text}</del></p>;
    const active = <p onClick={props.handler}>{props.text}</p>;
    if(props.active){
        return (active);
    }
    else return (deleted);
    }
export default Task;
