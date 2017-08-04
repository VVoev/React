import React, {Component} from 'react';
import './App.css';
import Towns from './Components/Towns'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Welcome to Weather App React</h2>
                <h3>Please enter a town you wish to see weather</h3>
                <Towns/>
            </div>
        );
    }
}

export default App;
