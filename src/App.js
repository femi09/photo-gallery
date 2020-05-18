import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import NavBar from "./components/navBar";
import TagDetails from "./pages/tagDetails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/t/:tag" component={TagDetails} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
