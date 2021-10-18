const getLoading = (state) => state.weather.loading;
const getWeatherData = (state) => state.weather.weatherData;

export default {
  getLoading,
  getWeatherData,
};
