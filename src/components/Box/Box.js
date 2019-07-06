import React from "react";
import "./Box.css";

class Box extends React.Component {
  render() {
    let styles = {
      background: this.props.color,
      WebkitBoxShadow: "0px 0px 100px 25px " + this.props.color,
      MozBoxShadow: "0px 0px 100px 25px " + this.props.color,
      boxShadow: "0px 0px 100px 25px " + this.props.color,
      boxShadowOpacity: 0.5
    };

    return (
      <div className="box" style={styles}>
        Я коробка
      </div>
    );
  }
}

export default Box;
