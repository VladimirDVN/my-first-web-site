import React from "react";
import "./App.css";

import Box from "./components/Box/Box";
import Button from "./components/Button/Button";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Box />
        <Button />
      </div>
    );
  }
}

export default App;
