import { combineReducers } from 'redux';
import FetchWeatherReducer from "./fetch_weather_reducer";

const rootReducer = combineReducers({
  weather: FetchWeatherReducer
});

export default rootReducer;
