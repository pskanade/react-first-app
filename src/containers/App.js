import React, { Component } from "react";
import "./App.css";
import Persons from "../Compoents/Persons/Persons";
import Cockpit from "../Compoents/Cockpit/Cockpit";
import withHoc from "../hoc/withHoc";

export const AuthContext = React.createContext(false); // the default value is set to false

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
    show: false,
    toggleClicked: 0,
    isAuthenticated: false
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

  onLoginHandler = () => {
    console.log("logged in .. ");
    this.setState({ isAuthenticated: true });
  };

  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return {
        show: !this.state.show,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  renderPersons = () => {
    return (
      <Persons
        show={this.state.show}
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.onInboxChangeHandler}
      />
    );
  };

  render() {
    return (
      <div className="App">
        <Cockpit
          clicked={this.togglePersonsHandler}
          login={this.onLoginHandler}
        />
        <AuthContext.Provider value={this.state.isAuthenticated}>
          {this.renderPersons()}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default withHoc(App);
