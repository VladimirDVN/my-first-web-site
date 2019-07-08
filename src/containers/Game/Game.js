import React from "react";
import { Link } from "react-router-dom";
import styles from "./game.module.css";

import Box from "components/Box/Box";
import Button from "components/Button/Button";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffffff"
    };
  }

  getRandomColor() {
    return (
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  }

  updateColor() {
    this.setState({ color: this.getRandomColor() });
  }

  render() {
    return (
      <div className={styles["game"]}>
        <Box color={this.state.color} />
        <Button updateColor={this.updateColor.bind(this)} />
        <Link className={styles["link"]} to="/home">
          Домой
        </Link>
      </div>
    );
  }
}

export default Game;
