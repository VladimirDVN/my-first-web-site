import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  render() {
    // var divStyle = {
    //   position: "absolute",
    //   right: "350px",
    //   top: "10px"
    // };
    return (
      <AppBar position="static">
        <Toolbar>
          <Link
            style={{
              textDecoration: "none",
              color: "white"
            }}
            to="/home"
          >
            <Button color="inherit">Главная</Button>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "white"
            }}
            to="/game"
          >
            {/* <div style={divStyle}> */}
            <Button color="inherit">Игра</Button>
            {/* </div> */}
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
