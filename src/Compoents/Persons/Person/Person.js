import React from "react";
import Aux from "./../../../hoc/Aux";

const person = props => {
  return (
    <Aux>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old
      </p>
      <input onChange={props.changed} value={props.name} />
      <p>{props.children}</p>
    </Aux>
  );
};

export default person;
