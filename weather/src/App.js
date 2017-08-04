import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import ForecastView from './Views/ForecastView'
import Towns from './Components/Towns'

import $ from 'jquery'
import WeatherRequester from '../src/Requester/WeatherRequester'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Welcome to Weather App React</h2>
                <h3>Please enter a town you wish to see weather</h3>
                <Towns
                    getTownInfo={this.submitClicked.bind(this)}
                />
                <main id="main"></main>
            </div>

        );
    }

    showView(reactViewComponent) {
        ReactDOM.render(reactViewComponent,
            document.getElementById('main'));
    }

    submitClicked() {
        let town = $('#town').val();

        WeatherRequester.getTownInfoByTown(town)
            .then(loadTownForRendering.bind(this));

        function loadTownForRendering(townInfo) {
            this.showView(
                <ForecastView
                    fullInfo = {townInfo}
                    name = {townInfo.city.name}
                />
            )
        }

    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }
}

