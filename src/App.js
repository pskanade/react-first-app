import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        id: "1",
        name: "Pranav",
        age: 23
      },
      {
        id: "2",
        name: "Aaditi",
        age: 19
      },
      {
        id: "3",
        name: "Chetan",
        age: 22
      }
    ],
    show: false
  };

  onInboxChangeHandler = (event, id) => {
    const personWithIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    let temp_persons = [...this.state.persons];
    temp_persons[personWithIndex].name = event.target.value;

    this.setState({
      persons: temp_persons
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons; // this is mutable do not do this.
    const persons = [...this.state.persons]; // Make a copy n then do the operation
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ show: !this.state.show });
  };

  renderPersons = () => {
    if (this.state.show) {
      return (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.onInboxChangeHandler(event, person.id)}
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
