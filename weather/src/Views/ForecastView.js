import React, {Component} from 'react';
import Bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
const kelvin = 273.15;

export default class ForecastView extends Component {
    render() {
        let name = this.props.name;
        let weatherRows = this.props.fullInfo.list.map(info =>
           <tr>{name}
                <td>{parseFloat(info.main.temp_min-kelvin).toFixed(2)}</td>
                <td>{parseFloat(info.main.temp_max-kelvin).toFixed(2)}</td>
                <td>{info.dt_txt}</td>
            </tr>
        )
        return (
            <div className="weather-view">
                <h1>Weather Forecast</h1>
                <table className="col-xs-6 col-xs-offset-3">
                    <thead>
                    <tr>
                        <th className="text-center">Municipality[Town]</th>
                        <th className="text-center">Min Temperature</th>
                        <th className="text-center">Max Temperature</th>
                        <th className="text-center">Time</th>
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
