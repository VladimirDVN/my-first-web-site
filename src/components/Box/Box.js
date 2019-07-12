import React from "react";
import { connect } from "react-redux";
import styles from "./box.module.css";

import { hexToRgb } from "utils";

class Box extends React.Component {
  render() {
    var color = hexToRgb(this.props.color);
    var generatedStyles = {
      background: "rgb(" + color.r + ", " + color.g + ", " + color.b + ")",
      WebkitBoxShadow:
        "0px 0px 100px 25px rgba(" +
        color.r +
        ", " +
        color.g +
        ", " +
        color.b +
        ", 0.5)",
      MozBoxShadow:
        "0px 0px 100px 25px rgba(" +
        color.r +
        ", " +
        color.g +
        ", " +
        color.b +
        ", 0.5)",
      boxShadow:
        "0px 0px 100px 25px rgba(" +
        color.r +
        ", " +
        color.g +
        ", " +
        color.b +
        ", 0.5)"
    };

    return (
      <div className={styles["box"]} style={generatedStyles}>
        Я коробка
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return { color: state.gameReducer.color };
};

export default connect(
  mapStateToProps,
  null
)(Box);
