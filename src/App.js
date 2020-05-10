import React, { Component } from "react";
import NavBar from "./components/navBar";
import Images from "./components/images";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Images />
      </React.Fragment>
    );
  }
}

export default App;
