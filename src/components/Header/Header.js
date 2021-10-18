import InputGroup from "react-bootstrap/InputGroup";
import { CloudFog } from "react-bootstrap-icons";
import { Button, FormControl } from "react-bootstrap";
import styles from "./header.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import weatherOperations from "../../Redux/weather-operations";

function Header() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const search = (evt) => {
    if (evt.key === "Enter") {
      dispatch(weatherOperations.getWeather(query));
      setQuery("");
    }
  };
  const onSearchClick = (query) => {
    dispatch(weatherOperations.getWeather(query));
    setQuery("");
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <CloudFog className={styles.icon} />
        <p className={styles.name}>Dao Forecast</p>
      </div>
      <InputGroup className={styles.input}>
        <FormControl
          placeholder="Search city"
          aria-label="Search city"
          aria-describedby="basic-addon2"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => onSearchClick(query)}
        >
          Search
        </Button>
      </InputGroup>
      <Button variant="outline-secondary">My Weather</Button>{" "}
    </div>
  );
}
export default Header;
