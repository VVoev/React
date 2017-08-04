import React, {Component} from 'react';

export default class ForecastView extends Component {
    render() {
        let name = this.props.name;
        const kelvin = 273.15;
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
                <table className="weather-table">
                    <thead>
                    <tr>
                        <th>Town</th>
                        <th>Min Temperature</th>
                        <th>Max Temperature</th>
                        <th>Time</th>
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
