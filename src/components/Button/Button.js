import React from "react";
import { connect } from "react-redux";
import styles from "./button.module.css";

import { getRandomColor } from "utils";
import { CHANGE_COLOR } from "store/actionTypes";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleClickRedux();
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    return (
      <div className={styles["button"]} onClick={this.handleClick.bind(this)}>
        Следующий цвет: {this.state.isOn ? "ВКЛ" : "ВЫКЛ"}!
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleClickRedux: function() {
      dispatch({
        type: CHANGE_COLOR,
        color: getRandomColor(),
        permit: true
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Button);
