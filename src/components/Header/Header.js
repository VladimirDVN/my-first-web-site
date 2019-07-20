import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./header.module.css";

class Header extends React.Component {
  render() {
    // var divStyle = {
    //   position: "absolute",
    //   right: "350px",
    //   top: "10px"
    // };
    return (
      <AppBar position="static">
        <Toolbar className={styles["toolbar"]}>
          <div className={styles["navigation-buttons"]}>
            <Link
              style={{
                textDecoration: "none",
                color: "white"
              }}
              to="/home"
            >
              {/* <div style={divStyle}> */}
              <Button color="inherit">Главная</Button>
              {/* </div> */}
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white"
              }}
              to="/game"
            >
              <Button color="inherit">Игра</Button>
            </Link>
            <Typography variant="h6">{this.props.windowName}</Typography>
          </div>

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

export default Header;
