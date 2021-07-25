import React, { useState } from "react";
import FilterPerson from "./components/FilterPerson";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

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
