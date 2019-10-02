import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import axios from "axios";

import styles from "./home.module.css";

import Header from "components/Header/Header";
import Menu from "components/Menu/Menu";

class Home extends React.Component {
  // handleClick(event) {
  //   event.preventDefault();
    // axios
    //   .get(
    //     "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=9affdf784d1f0ec2d5fb8d41938a5f72"
    //   )
    //   .then(function(response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function() {
    //     // always executed
    //   });

    // fetch(
    //   "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=9affdf784d1f0ec2d5fb8d41938a5f72",
    //   {
    //     method: "GET"
    //   }
    // )
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(res) {
    //     console.log(res);
    //   });

  componentDidMount() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9affdf784d1f0ec2d5fb8d41938a5f72"
      )
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });


    // fetch(
    //     "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9affdf784d1f0ec2d5fb8d41938a5f72",
    //     {method: "GET"}
    //   )
    //     .then(function(res) {
    //       console.log(res);
    //     })
    //     // .then(function(res) {
    //     //   console.log(res);
    //     // })
    //     .catch(function(res) {
    //       console.log(res);
    //     });

    // const zip = "London,uk";
    // const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
    //   zip +
    // "&appid=b1b35bba8b434a28a0be2a3e1071ae5b";
    // fetch(URL).then(res => res.json()).then(json => {
    //   console.log(json);
    // });
  }

  render() {
    return (
      <div className={styles["window"]}>
        <Header windowName="Главная" />
        <div className={styles["context"]}>
          <Menu />
          <div className={styles["home"]}>
            <p>Привет, ты на нашем сайте! Давай погуляем по сайту!</p>

            <Link style={{ textDecoration: "none" }} to="/game">
              <Fab
                variant="extended"
                style={{ background: "green", color: "white" }}
              >
                Играть
              </Fab>
            </Link>
          </div>
          <div
            className={styles["button"]}
            // onClick={this.handleClick.bind(this)}
          >
            Погода
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
