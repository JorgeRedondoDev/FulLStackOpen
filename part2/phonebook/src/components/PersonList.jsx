import React from "react";

const PersonList = (props) => {
  return (
    <div>
      {props.persons
        .filter((e) => e.name.includes(props.filter))
        .map((el) => (
          <p key={el.name}>{el.name}</p>
        ))}
    </div>
  );
};

export default PersonList;
