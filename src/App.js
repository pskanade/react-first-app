import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>This is my first react application</h3>
        <Person />
      </div>
    );
  }
}

export default App;
