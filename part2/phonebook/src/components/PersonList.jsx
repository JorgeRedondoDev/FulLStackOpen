import React from "react";

const PersonList = (props) => {
  return (
    <div>
      {props.persons
        .filter((e) => e.name.includes(props.filter))
        .map((el) => (
          <p key={el.id}>
            {el.name} / {el.number}
          </p>
        ))}
    </div>
  );
};

export default PersonList;
