import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const api = {
  key: "36203ca46e4f83cc78c28601f092114e",
  baseURL: "api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <>
      <Header />
      <Container></Container>
      <Footer />
    </>
  );
}

export default App;
