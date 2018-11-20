import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Pranav",
        age: 23
      }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "Kanade",
          age: 23
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h3>This is my first react application</h3>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          I'm a developer
        </Person>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;
