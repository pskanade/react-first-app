import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h3>This is my first react application</h3>
    //   </div>
    // );

    // return React.createElement("div", null, "h1", "This"); here the h1 tag // won't get applied
    return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h3", null, "This is heading!")
    );
  }
}

export default App;
