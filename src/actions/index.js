import axios from "axios";

const API_KEY = "38d075e481cdcd626d0e1e110bb4bbd6";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    const req = axios.get(url);

    console.log("req:", req);

    return {
        type: FETCH_WEATHER,
        payload: req
    }
}