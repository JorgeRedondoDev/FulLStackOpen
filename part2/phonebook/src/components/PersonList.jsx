import React from "react";
import axios from "../services/axios";

const PersonList = ({ data, deletePerson }) => {
  return (
    <div>
      <p>
        {data.name} / {data.number}
        <button onClick={deletePerson}>Delete</button>
      </p>
    </div>
  );
};

export default PersonList;
