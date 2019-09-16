import React from 'react';
import '../App.css';
import Button from './Button';


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
        list: [],
    };
    addNew = () => {
        if (this.state.text !== "") {
            this.setState({
                list: [
                    ...this.state.list,
                    {text: this.state.text, active: true, id: Date.now()},
                ],
                text: "",
            });
        }
    };
    onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({text: e.currentTarget.value});

    };

    enterCatcher = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && this.state.text !== "") {
            this.setState({
                list: [
                    ...this.state.list,
                    {text: this.state.text, active: true, id: Date.now()},
                ],
                text: "",
            });
        }
    };

    onDeleteBtnHandler = (id: number) => () => {
        this.setState({
            list: this.state.list.filter(task => task.id !== id)
        })
    };

    onClickHandler = (id: number) => () => {
            this.setState({list: this.state.list.map((task) => {
                if(task.id === id){
                    return {
                        ...task,
                        active: !task.active,
                    }
                }
                else {
                 return task;
                }
                })
              } );
    };

    render() {
        const line = <hr/>;
        let todoList = this.state.list.map((task) =>
            <li key={task.id}>
                <span onClick={this.onClickHandler(task.id)}>{task.active ? task.text : <del>{task.text}</del>}
                </span>
                <Button text="Delete" handler={
                    this.onDeleteBtnHandler(task.id)}/>
                {line}
            </li>);

        return (
            <div className="ToDo">
                <h1>Todo List</h1>
                <input type="text" placeholder="Task" onChange={this.onInputChange} onKeyPress={this.enterCatcher}
                       value={this.state.text}/>
                <Button text="Add" handler={
                    this.addNew}/>
                {todoList}
            </div>
        );
    }
}

export default ToDo;

