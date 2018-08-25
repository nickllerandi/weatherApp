import React, {Component} from "react";
import { connect } from "react-redux";
import Chart from "../components/sparkline";
import GoogleMap from "../components/googleMap";

class WeatherList extends Component {
    renderWeather = () => {
        return this.props.weather.map((cityData) => {
            const name = cityData.city.name;
            const temp = cityData.list.map(weather => weather.main.temp);
            const pressure = cityData.list.map(weather => weather.main.pressure);
            const humidity = cityData.list.map(weather => weather.main.humidity);
            const { lat, lon } = cityData.city.coord;

            return (
                <tr key={name}>
                    <td>
                        <GoogleMap lat={lat} lon={lon}/>
                    </td>
                    <td>
                        <Chart data={temp} color="orange" units="K"/>
                    </td>
                    <td>
                        <Chart data={pressure} color="red" units="hPa"/>
                    </td>
                    <td>
                        <Chart data={humidity} color="green" units="%"/>
                    </td>
                </tr>
            )
        })
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp (K)</th>
                        <th>Pressure (HPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {/*{this.props.weather.map(this.renderWeather)}*/}
                    {this.renderWeather()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);