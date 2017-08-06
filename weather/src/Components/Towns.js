import React, {Component} from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import WeatherRequester from '../Requester/WeatherRequester';
import $ from 'jquery';

export default class Towns extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="usr">Town:</label>
                        <input type="text" className="form-control" id="town"></input>
                        <button type="button" className="btn btn-success" onClick={this.props.getTownInfo.bind(this)}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
