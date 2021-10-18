import { createAction } from "@reduxjs/toolkit";

export const getWeatherRequest = createAction("weather/getWeatherRequest");
export const getWeatherSuccess = createAction("weather/getWeatherSuccess");
export const getWeatherError = createAction("weather/getWeatherError");
