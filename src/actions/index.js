import axios from 'axios';

const API_KEY = 'bb18802db3d5a61ffe7cc6f576a7990b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;

	return fetch(url).then(res => ({
		type: FETCH_WEATHER,
		payload: res.json(),
	}));
}
