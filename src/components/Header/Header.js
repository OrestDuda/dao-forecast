import InputGroup from "react-bootstrap/InputGroup";
import { CloudFog } from "react-bootstrap-icons";
import { Button, FormControl } from "react-bootstrap";
import styles from "./header.module.scss";

function Header() {
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
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      <Button variant="outline-secondary">My Wheather</Button>{" "}
    </div>
  );
}
export default Header;
