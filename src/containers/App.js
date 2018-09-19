import React, { Component } from "react";
import Landing from "./pages/Landing";

import { Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Route exact strict path="/" render={props => <Landing {...props} />} />
      </div>
    );
  }
}

export default App;
