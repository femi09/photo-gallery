import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import HomePage from "./pages/homePage";
import NavBar from "./components/navBar";
import TagDetails from "./pages/tagDetails";
import configureStore from "./store/configureStore"
import "./App.css";

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <Switch>
          {/* <Route path="/t/:tag" component={TagDetails} /> */}
          <Route path="/" component={HomePage} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
