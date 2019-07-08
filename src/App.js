import React from "react";
import styles from "./app.module.css";

import { Box } from "./components/Box";
import Button from "./components/Button/Button";

class App extends React.Component {
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
      <div className={styles["app"]}>
        <Box color={this.state.color} />
        <Button updateColor={this.updateColor.bind(this)} />
      </div>
    );
  }
}

export default App;
