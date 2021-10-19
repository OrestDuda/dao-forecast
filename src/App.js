import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Weather from "./components/Weather/Weather";
import { useDispatch, useSelector } from "react-redux";
import weatherOperations from "./Redux/weather-operations";
import weatherSelectors from "./Redux/weather-selectors";
import "./App.scss";

function App() {
  const weather = useSelector(weatherSelectors.getWeatherData);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        weatherOperations.getUserWeather({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      );
    });
  }, []);

  return (
    <>
      <Header />
      {weather.length !== 0 && <Weather />}
      <Footer />
    </>
  );
}

export default App;
