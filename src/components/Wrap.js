import React, { Component } from "react";
import Details from "./Details";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Application from "./Application";
class Wrap extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/application" component={Application} />
        </Switch>
      </div>
    );
  }
}
export default Wrap;
