import React from "react";
import MultiStepForm from "./view/MultiStepForm";
import Posts from "./view/Posts";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./view/Nav";
const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/form" component={MultiStepForm} />
        <Route path="/posts" component={Posts} />
        <Redirect to="/form" />
      </Switch>
    </div>
  );
};

export default App;
