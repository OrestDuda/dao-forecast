import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherError,
} from "./weather-actions";

const weatherData = createReducer([], {
  [getWeatherSuccess]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [getWeatherRequest]: () => true,
  [getWeatherSuccess]: () => false,
  [getWeatherError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  weatherData,
  loading,
  error,
});
