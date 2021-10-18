import axios from "axios";
import {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherError,
} from "./weather-actions";

const api_ulr = process.env.REACT_APP_API_URL;
const api_key = process.env.REACT_APP_API_KEY;

const getWeather = (query) => (dispatch) => {
  dispatch(getWeatherRequest());
  axios
    .get(`${api_ulr}weather?q=${query}&nits=metric&APPID=${api_key}`)
    .then(({ data }) => dispatch(getWeatherSuccess(data)))
    .catch((error) => dispatch(getWeatherError(error)));
};

export default {
  getWeather,
};
