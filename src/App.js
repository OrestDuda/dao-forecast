import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Weather from "./components/Weather/Weather";
import "./App.scss";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const api_ulr = process.env.REACT_APP_API_URL;
  const api_key = process.env.REACT_APP_API_KEY;

  // const search = (evt) => {
  //   if (evt.key === "Enter") {
  //     fetch(`${api.base}weather?q=${query}&nits=metric&APPID=${api.key}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setWeather(result);
  //         setQuery("");
  //         console.log(result);
  //       });
  //   }
  // };

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
