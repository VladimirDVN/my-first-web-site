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

  handleClick() {
    this.props.handleClickRedux();
    //this.props.updateColor();
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    return (
      <div className={styles["button"]} onClick={this.handleClick.bind(this)}>
        Я кнопка: {this.state.isOn ? "ВКЛ" : "ВЫКЛ"}!
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleClickRedux: function() {
      dispatch({
        type: CHANGE_COLOR,
        color: getRandomColor()
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Button);
