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
        list:[],
    };
     addNew = () => {
        this.setState({
            list: [
                ...this.state.list,
                { text:this.state.text, active: true, id: Date.now() },
            ],
            text:"",
        });

    };
     onInputChange = (e:React.FormEvent<HTMLInputElement>) => {
         this.setState({text: e.currentTarget.value})
     };

     onDeleteBtnHandler = (id: number)=> () => {
          this.setState( {list: this.state.list.filter(task => task.id !== id)
              } )
         };



    onClickhandler = (id: number)=> () => {
        {this.state.list[this.state.list.findIndex(task => task.id == id)].active =
            !this.state.list[this.state.list.findIndex(task => task.id == id)].active}
        this.setState({list: this.state.list})
        };


    render() {
        const line = <hr/>;
        let todoList =this.state.list.map((task)=> <li onClick={this.onClickhandler(task.id)} key={task.id}>{task.active ? task.text : <del>{task.text}</del>}
        <Button text = "Delete" handler={
            this.onDeleteBtnHandler(task.id)}/>
            {line}
        </li>);

        return (
                <div className="ToDo">
                    <h1>Todo List</h1>
                    <input type="text" placeholder="Task" onChange={this.onInputChange} value={this.state.text}/>
                    <Button text="Add" handler={
                        this.addNew}/>

                    {todoList}
                    {/*<Input addNew={this.addNew} task={this.state.text}/>*/}

                </div>
        );
    }
}
export default ToDo;

