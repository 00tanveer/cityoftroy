import React, { Component } from "react";
import Landing from "./pages/Landing";
import Fashion from "./pages/Fashion";
import Editor from "./RichTextEditor/Editor";

import { Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Route exact strict path="/" render={props => <Landing {...props} />} />
        <Route
          exact
          strict
          path="/fashion/me"
          render={props => <Fashion {...props} />}
        />
        <Route
          exact
          strict
          path="/fashion/collabs"
          render={props => <Fashion {...props} />}
        />
        <Route
          path="/fashion/me/post"
          render={props => <Editor blog={"me"} {...props} />}
        />
        <Route
          path="/fashion/collabs/post"
          render={props => <Editor blog={"collabs"} {...props} />}
        />
      </div>
    );
  }
}

export default App;
