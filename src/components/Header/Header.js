import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import styles from "./header.module.css";
import { TOGGLE_MENU } from "store/actionTypes";

class Header extends React.Component {
  handleClick(event) {
    event.preventDefault();
    this.props.handleClickRedux();
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar className={styles["toolbar"]}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Menu"
            onClick={this.handleClick.bind(this)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{this.props.windowName}</Typography>
          <Link
            style={{
              textDecoration: "none",
              color: "white"
            }}
            to="/login"
          >
            <Button color="inherit">Войти</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleClickRedux: function() {
      dispatch({
        type: TOGGLE_MENU
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
