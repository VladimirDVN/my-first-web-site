import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "containers/Home/Home";
import Game from "containers/Game/Game";

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/game" component={Game} />
      </BrowserRouter>
    );
  }
}

export default App;
