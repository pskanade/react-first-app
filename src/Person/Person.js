import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I'm {props.age} years old
      </p>
      <input onChange={props.changed} value={props.name} />
      <p onClick={() => console.log("clicked")}>{props.children}</p>
    </div>
  );
};

export default person;
