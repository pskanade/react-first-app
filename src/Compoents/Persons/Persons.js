import React from "react";
import Person from "./Person/Person";

export default props => {
  if (props.show) {
    return (
      <div>
        {props.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => props.clicked(index)}
              changed={event => props.changed(event, person.id)}
              isAuthenticated={props.isAuthenticated}
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
