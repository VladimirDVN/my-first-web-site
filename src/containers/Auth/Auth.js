import React from "react";
// import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

import styles from "./auth.module.css";

import Header from "components/Header/Header";
import Menu from "components/Menu/Menu";

// const axios = require("axios");

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isAuthenticated: false };
  }

  handleChange(event, field) {
    event.preventDefault();
    this.setState({ [field]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();

    fetch("http://localhost/api_login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": "{{ csrf_token() }}"
      },
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(res) {
        console.log(res);
      });

    // axios({
    //   method: "post",
    //   url: "api_login",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-CSRFToken": "{{ csrf_token() }}"
    //   },
    //   // headers: {
    //   //   "X-CSRFToken": "{{ csrf_token() }}",
    //   //   "Access-Control-Allow-Origin": "*"
    //   // },
    //   data: {
    //     username: this.state.username,
    //     password: this.state.password
    //   }
    // })
    // let config = {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "X-CSRFToken": "{{ csrf_token() }}",
    //     "Access-Control-Allow-Origin": "*"
    //   }
    // };

    // axios
    //   .post(
    //     "http://localhost:5000/api_login",
    //     {
    //       username: this.state.username,
    //       password: this.state.password
    //     },
    //     config
    //   )
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <div className={styles["window"]}>
        <Header windowName="Авторизация" />
        <div className={styles["context"]}>
          <Menu />
          <div className={styles["auth"]}>
            <p>Привет, авторизуйся!</p>
            <TextField
              label="Username"
              onChange={event => {
                return this.handleChange(event, "username");
              }}
              margin="dense"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              onChange={event => {
                return this.handleChange(event, "password");
              }}
              margin="dense"
              variant="outlined"
            />

            {/* <Link style={{ textDecoration: "none" }} to="/home"> */}
            <Fab
              variant="extended"
              style={{ background: "green", color: "white" }}
              onClick={this.handleClick.bind(this)}
            >
              Войти
            </Fab>
            {/* </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
