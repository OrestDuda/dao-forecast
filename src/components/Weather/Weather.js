import Spinner from "react-bootstrap/Spinner";
import weatherSelectors from "../../Redux/weather-selectors";
import { useSelector } from "react-redux";
import styles from "./weather.module.scss";

function Weather() {
  const weather = useSelector(weatherSelectors.getWeatherData);
  const loading = useSelector(weatherSelectors.getLoading);

  return (
    <div>
      {(loading && (
        <Spinner className={styles.loader} animation="border" />
      )) || <p>{weather.name}</p>}
    </div>
  );
}
export default Weather;
