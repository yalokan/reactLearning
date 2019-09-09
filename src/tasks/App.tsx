import React from 'react';

import '../App.css';
import Counter from './Counter';
import Button from './Button';


class App extends React.Component {
    state = {
        value: 0,
    };

    render() {
        return (
            <div>
                <Counter value={this.state.value}/>
                <Button text="+1" handler={() => this.setState({value: this.state.value + 1})}/>
                <Button text="+5" handler={() => this.setState({value: this.state.value + 5})}/>
                <Button text="Reset" handler={() => this.setState({value: 0})}/>

            </div>

        );
    }
}



// const App: React.FC = () => {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/tasks/App.tsx</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }
//
 export default App;
