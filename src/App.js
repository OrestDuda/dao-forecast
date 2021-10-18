import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Weather from "./components/Weather/Weather";
import { useDispatch } from "react-redux";
import weatherOperations from "./Redux/weather-operations";
import "./App.scss";

function App() {
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
      <Container>
        <Weather />
      </Container>
      <Footer />
    </>
  );
}

export default App;
