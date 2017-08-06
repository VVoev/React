import React, {Component} from 'react';
import Bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import tableCss from '../Views/css/table.css';

const kelvin = 273.15;

export default class ForecastView extends Component {
    render() {
        let counter = 0;
        let name = this.props.name;
        let weatherRows = this.props.fullInfo.list.map(info =>
            <tr className="table table-striped">
                <td>{++counter}.</td>
                <td>{parseFloat(info.main.temp_min - kelvin).toFixed(2)}</td>
                <td>{parseFloat(info.main.temp_max - kelvin).toFixed(2)}</td>
                <td>{parseFloat(info.wind.speed).toFixed(2)}</td>
                <td>{parseFloat(info.main.humidity).toFixed(2)}%</td>
                <td>{(info.weather[0].description)}</td>
                <td>{info.dt_txt}</td>
            </tr>
        )

        return (
            <div className="table">
                <h1>Weather Forecast</h1>
                <h2>{name}</h2>
                <table className="table table-striped">
                    <thead>
                    <tr scope="row" className="w3-blue">
                        <th className="w3-first text-center">Num:</th>
                        <th className="w3-first text-center">Min Temperature</th>
                        <th className="w3-first text-center">Max Temperature</th>
                        <th className="w3-first text-center">Wind Speed</th>
                        <th className="w3-first text-center">Humidity</th>
                        <th className="w3-first text-center">Weather Forecast</th>
                        <th className="w3-first text-center">Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {weatherRows}
                    </tbody>
                </table>
            </div>
        )
    }
}
