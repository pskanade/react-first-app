import React from "react";

export default props => {
  return (
    <div>
      <h3>This is my first react application</h3>
      <button onClick={props.clicked}>Toggle Persons</button>
      <br />
      <button onClick={props.login}>Log In !</button>
    </div>
  );
};
