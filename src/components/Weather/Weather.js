import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import {
  ThermometerHalf,
  ThermometerLow,
  ArrowsCollapse,
  Moisture,
  Wind,
} from "react-bootstrap-icons";
import weatherSelectors from "../../Redux/weather-selectors";
import { useSelector } from "react-redux";
import styles from "./weather.module.scss";
import { useEffect, useState } from "react";

function Weather() {
  const weather = useSelector(weatherSelectors.getWeatherData);
  const loading = useSelector(weatherSelectors.getLoading);
  const [bg, setBg] = useState("");
  const [temp, setTemp] = useState(0);

  const blue = 180;
  const red = 33;
  const yellow = 53;

  useEffect(() => {
    if (weather.main.temp <= -10) {
      document.body.style.backgroundColor = `hsl(${blue}, 50%, 50%)`;
    } else if (weather.main.temp > -10 && weather.main.temp < 30) {
      document.body.style.backgroundColor = `hsl(${yellow}, 50%, 50%)`;
    } else if (weather.main.temp >= 30) {
      document.body.style.backgroundColor = `hsl(${red}, 50%, 50%)`;
    }
  }, [bg, weather]);

  function handleChange(event) {
    setTemp(event.target.value);
    document.body.style.backgroundColor = `hsl(${temp}, 50%, 50%)`;
  }

  return (
    <div className={styles.container}>
      {(loading && (
        <Spinner className={styles.loader} animation="border" />
      )) || (
        <div className={styles.data}>
          <h3 className={styles.title}>
            {weather.name}, {weather.sys.country}
          </h3>
          <ul className={styles.list_data}>
            <li>
              <ThermometerHalf />
              <span>Temperature : {Math.round(weather.main.temp)}°C</span>
            </li>
            <li>
              <ThermometerLow />
              <span>Feels like : {Math.round(weather.main.feels_like)}°C</span>
            </li>
            <li>
              <ArrowsCollapse />
              <span>Pressure : {weather.main.pressure} hPa</span>
            </li>
            <li>
              <Moisture />
              <span>Humidity : {weather.main.humidity}%</span>
            </li>
            <li>
              <Wind />
              <span>Wind : {weather.wind.speed}m/s</span>
            </li>
          </ul>
          <h3 className={styles.title}>{weather.weather[0].main}</h3>
          <Form.Range min={33} max={180} onChange={handleChange} value={temp} />
        </div>
      )}
    </div>
  );
}
export default Weather;
