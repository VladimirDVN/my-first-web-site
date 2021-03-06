import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "containers/Home/Home";
import Game from "containers/Game/Game";
import Auth from "containers/Auth/Auth";

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/login" component={Auth} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
