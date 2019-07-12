import React from "react";
import { Link } from "react-router-dom";
import styles from "./game.module.css";

import Header from "components/Header/Header";
import Box from "components/Box/Box";
import Button from "components/Button/Button";

// import { getRandomColor } from "utils";

class Game extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     color: "#ffffff"
  //   };
  // }

  // updateColor() {
  //   this.setState({ color: getRandomColor() });
  // }

  render() {
    return (
      <div className={styles["main"]}>
        <Header />
        <div className={styles["game"]}>
          <div className={styles["row"]}>
            {/* <Box color={this.state.color} />
            <Button updateColor={this.updateColor.bind(this)} /> */}
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
