import { createAction } from "@reduxjs/toolkit";

export const getWeatherRequest = createAction("weather/getWeatherRequest");
export const getWeatherSuccess = createAction("weather/getWeatherSuccess");
export const getWeatherError = createAction("weather/getWeatherError");

export const getUserWeatherRequest = createAction(
  "weather/getUserWeatherRequest"
);
export const getUserWeatherSuccess = createAction(
  "weather/getUserWeatherSuccess"
);
export const getUserWeatherError = createAction("weather/getUserWeatherError");
