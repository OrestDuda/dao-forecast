import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherError,
  getUserWeatherRequest,
  getUserWeatherSuccess,
  getUserWeatherError,
} from "./weather-actions";

const weatherData = createReducer([], {
  [getWeatherSuccess]: (state, { payload }) => payload,
  [getUserWeatherSuccess]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [getWeatherRequest]: () => true,
  [getWeatherSuccess]: () => false,
  [getWeatherError]: () => false,
  [getUserWeatherRequest]: () => true,
  [getUserWeatherSuccess]: () => false,
  [getUserWeatherError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  weatherData,
  loading,
  error,
});
