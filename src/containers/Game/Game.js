import React from "react";
import { Link } from "react-router-dom";
import styles from "./game.module.css";

import Header from "components/Header/Header";
import Box from "components/Box/Box";
import Button from "components/Button/Button";

class Game extends React.Component {
  render() {
    return (
      <div className={styles["main"]}>
        <Header />
        <div className={styles["game"]}>
          <div className={styles["row"]}>
            <Box />
            <Button />
          </div>

          <Link to="/home">Домой</Link>
        </div>
      </div>
    );
  }
}

export default Game;
