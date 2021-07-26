import React, { useState, useEffect } from "react";
import FilterPerson from "./components/FilterPerson";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setNewPhone(event.target.value);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateUsers = [
      ...persons,
      {
        name: newName,
        phone: newName,
      },
    ];
    persons.some((e) => e.name === newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(updateUsers);

    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPerson handleChangeFilter={handleChangeFilter} />
      <h2>Add a new </h2>

      <AddPerson
        handleChangeName={handleChangeName}
        handleChangePhone={handleChangePhone}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <PersonList persons={persons} filter={filter} />
    </div>
  );
};

export default App;
