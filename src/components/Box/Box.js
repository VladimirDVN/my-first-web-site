import React from "react";
import "./Box.css";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.getRandomColor()
    };
  }

  getRandomColor() {
    return (
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  }

  render() {
    return (
      <div className="box" style={{ background: this.state.color }}>
        Я коробка
      </div>
    );
  }
}

export default Box;
