import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

class Home extends React.Component {
  render() {
    return (
      <div className={styles["home"]}>
        <p>Привет, ты на нашем сайте! Давай погуляем по сайту!</p>
        <Link className={styles["link"]} to="/game">
          Тут игра
        </Link>
      </div>
    );
  }
}

export default Home;
