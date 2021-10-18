import styles from "./weather.module.scss";
import weatherSelectors from "../../Redux/weather-selectors";
import { useSelector } from "react-redux";

function Weather() {
  const weather = useSelector(weatherSelectors.getWeatherData);
  console.log(weather);
  return <div>Weather here</div>;
}
export default Weather;
