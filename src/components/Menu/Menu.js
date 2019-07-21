import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./menu.module.css";

class Menu extends React.Component {
  render() {
    return this.props.isOn ? (
      <div className={styles["menu"]}>
        <Link className={styles["button"]} to="/home">
          Главная
        </Link>
        <Link className={styles["button"]} to="/game">
          Игра
        </Link>
      </div>
    ) : null;
  }
}

const mapStateToProps = function(state) {
  return { isOn: state.menuReducer.isOn };
};

export default connect(
  mapStateToProps,
  null
)(Menu);
