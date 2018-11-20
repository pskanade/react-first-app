import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      {
        name: "Pranav",
        age: 23
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h3>This is my first react application</h3>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        >
          I'm a developer
        </Person>
      </div>
    );
  }
}

export default App;
