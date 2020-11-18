import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Profile from "./pages/Profile";
import HomePage from "./pages/Home";
import NavBar from "./components/NavBar";
import TagDetails from "./pages/TagDetails";
import configureStore from "./store/configureStore";
import "./App.css";

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/t/:tag" component={TagDetails} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Provider>
  );
};

export default App;
