import React from "react";
import styles from "./button.module.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
  }

  handleClick() {
    this.props.updateColor();
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

export default Button;
