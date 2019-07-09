import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Link style={{ textDecoration: "none", color: "white" }} to="/home">
            <Button color="inherit">Главная</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
