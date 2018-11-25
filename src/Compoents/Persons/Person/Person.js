import React, { Component } from "react";
import Aux from "./../../../hoc/Aux";
import withHoc from "../../../hoc/withHoc";
import { AuthContext } from "../../../containers/App";

class Person extends Component {
  componentDidMount() {
    this.inputText.focus();
  }
  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => (auth ? <p>I'm in :)</p> : null)}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old
        </p>
        <input
          ref={inp => (this.inputText = inp)}
          onChange={this.props.changed}
          value={this.props.name}
        />
        <p>{this.props.children}</p>
      </Aux>
    );
  }
}

export default withHoc(Person);
