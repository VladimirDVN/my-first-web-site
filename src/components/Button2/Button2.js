import React from "react";
import { connect } from "react-redux";
import styles from "./button2.module.css";

import { PREV_COLOR } from "store/actionTypes";

class Button2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
  }

  handleClick() {
    this.props.handleClickRedux();
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    return (
      <div className={styles["button"]} onClick={this.handleClick.bind(this)}>
        Предыдущий цвет: {this.state.isOn ? "ВКЛ" : "ВЫКЛ"}!
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleClickRedux: function() {
      dispatch({
        type: PREV_COLOR
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Button2);
