import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import styles from "./home.module.css";

import Header from "components/Header/Header";
import Menu from "components/Menu/Menu";

class Home extends React.Component {
  render() {
    return (
      <div className={styles["window"]}>
        <Header windowName="Главная" />
        <div className={styles["context"]}>
          <Menu />
          <div className={styles["home"]}>
            <p>Привет, ты на нашем сайте! Давай погуляем по сайту!</p>

            <Link style={{ textDecoration: "none" }} to="/game">
              <Fab
                variant="extended"
                style={{ background: "green", color: "white" }}
              >
                Играть
              </Fab>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
