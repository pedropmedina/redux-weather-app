import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather = cityData => {
		const { name } = cityData.city;
		const { lat, lon } = cityData.city.coord;

		const temps = cityData.list.reduce((acc, { main }) => {
			const { temp, pressure, humidity } = main;
			if (acc.length === 0) {
				acc[0] = [];
				acc[1] = [];
				acc[2] = [];
			}
			const t = (acc[0] = [...acc[0], temp]);
			const p = (acc[1] = [...acc[1], pressure]);
			const h = (acc[2] = [...acc[2], humidity]);
			return acc;
		}, []);

		return (
			<tr key={name}>
				<td>
					<GoogleMap lat={lat} lon={lon} />
				</td>
				<td>
					<Chart data={temps[0]} color="orange" units="K" />
				</td>
				<td>
					<Chart data={temps[1]} color="green" units="hPa" />
				</td>
				<td>
					<Chart data={temps[2]} color="gray" units="%" />
				</td>
			</tr>
		);
	};

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
