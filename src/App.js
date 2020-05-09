import React, { Component } from "react";
import NavBar from "./components/navBar";
import ImageList from "./components/imageList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ImageList />
      </React.Fragment>
    );
  }
}

export default App;
