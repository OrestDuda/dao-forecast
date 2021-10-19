import axios from "axios";
import {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherError,
  getUserWeatherSuccess,
  getUserWeatherError,
  getUserWeatherRequest,
} from "./weather-actions";

const api_ulr = process.env.REACT_APP_API_URL;
const api_key = process.env.REACT_APP_API_KEY;

const getWeather = (query) => (dispatch) => {
  dispatch(getWeatherRequest());
  axios
    .get(`${api_ulr}weather?q=${query}&units=metric&appid=${api_key}`)
    .then(({ data }) => dispatch(getWeatherSuccess(data)))
    .catch((error) => dispatch(getWeatherError(error)));
};

const getUserWeather = (location) => (dispatch) => {
  dispatch(getUserWeatherRequest());
  axios
    .get(
      `${api_ulr}weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${api_key}`
    )
    .then(({ data }) => dispatch(getUserWeatherSuccess(data)))
    .catch((error) => dispatch(getUserWeatherError(error)));
};

export default {
  getWeather,
  getUserWeather,
};
