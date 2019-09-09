import React from 'react';

import '../App.css';
import Task from './Task';
import Button from './Button';
import list from "./TaskList";
import Input from "./Input";

type ToDoItem = {
    text: string;
    active: boolean;
    id: number;
}
type ToDoState = {
    text: string;
    list: ToDoItem[];
}
class ToDo extends React.Component<{}, ToDoState> {
    state: ToDoState = {
        text: "",
        list:[],
    };
     addNew = () => {
        this.setState({
            list: [
                ...this.state.list,
                { text:this.state.text, active: true, id: this.state.list.length + 1 },
            ],
            text:"",
        });

    };
     onInputChange = (e:React.FormEvent<HTMLInputElement>) => {
         console.log(e.currentTarget.value);
         this.setState({text: e.currentTarget.value})
     };

    render() {
        let todoList =this.state.list.map((task)=> <li key={task.id}>{task.text}</li>);
        const line = <hr/>;

        return (
                <div className="ToDo">

                    <h1>Todo List</h1>
                    <input type="text" placeholder="Task" onChange={this.onInputChange} value={this.state.text}/>
                    <Button text="Add" handler={
                        this.addNew}/>
                    {todoList}
                    {/*<Input addNew={this.addNew} task={this.state.text}/>*/}
                    {line}
                </div>
        );
    }
}
export default ToDo;

