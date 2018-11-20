import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Pranav",
        age: 23
      },
      {
        name: "Aaditi",
        age: 19
      },
      {
        name: "Chetan",
        age: 22
      }
    ],
    show: false
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "Kanade",
          age: 23
        },
        {
          name: "Aaditi",
          age: 19
        },
        {
          name: "Chetan",
          age: 22
        }
      ]
    });
  };

  onInboxChangeHandler = event => {
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: 23
        },
        {
          name: "Aaditi",
          age: 19
        },
        {
          name: "Chetan",
          age: 22
        }
      ]
    });
  };

  togglePersonsHandler = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <h3>This is my first react application</h3>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.show ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              changed={this.onInboxChangeHandler}
            >
              I'm a developer
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
