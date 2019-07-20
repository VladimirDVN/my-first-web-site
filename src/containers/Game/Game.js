import React from "react";
//import state from "store/reducers/game";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import styles from "./game.module.css";

import Header from "components/Header/Header";
import Box from "components/Box/Box";
import Button from "components/Button/Button";
import Button2 from "components/Button2/Button2";

class Game extends React.Component {
  render() {
    return (
      <div className={styles["main"]}>
        <Header windowName="Игра" />
        <div className={styles["game"]}>
          <Box />
          <div className={styles["row"]}>
            {this.props.permit ? <Button2 /> : null}
            <Button />
          </div>
          {/* <Link to="/home">Домой</Link> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return { permit: state.gameReducer.permit };
};
export default connect(
  mapStateToProps,
  null
)(Game);
