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

  renderPersons = () => {
    if (this.state.show) {
      return (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                name={person.name}
                age={person.age}
                changed={this.onInboxChangeHandler}
              />
            );
          })}
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <div className="App">
        <h3>This is my first react application</h3>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.renderPersons()}
      </div>
    );
  }
}

export default App;
