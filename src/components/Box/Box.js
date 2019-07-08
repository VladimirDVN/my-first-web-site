import React from "react";
import styles from "./box.module.css";

class Box extends React.Component {
  render() {
    let generatedStyles = {
      background: this.props.color,
      WebkitBoxShadow: "0px 0px 100px 25px " + this.props.color,
      MozBoxShadow: "0px 0px 100px 25px " + this.props.color,
      boxShadow: "0px 0px 100px 25px " + this.props.color,
      boxShadowOpacity: 0.5
    };

    return (
      <div className={styles["box"]} style={generatedStyles}>
        Я коробка
      </div>
    );
  }
}

export default Box;
