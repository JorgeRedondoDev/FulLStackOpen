import React, { useState, useEffect } from "react";
import FilterPerson from "./components/FilterPerson";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";
import axios from "./services/axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.getAll().then((response) => {
      setPersons(response);
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
    const addPersons = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    };

    persons.some((a) => a.name === newName)
      ? askForUpdate(persons.find((e) => e.name === newName).id, addPersons)
      : axios.create(addPersons).then((response) => {
          setPersons(persons.concat(response));
        });
  };

  const askForUpdate = (id, update) => {
    if (
      window.confirm(
        `'${update.name}' is already added to phonebook, replace the olde number with a new one?`
      )
    ) {
      axios.update(id, update).then((re) => {
        console.log("added");
      });
    }
  };
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete '${name}'?`)) {
      axios.eliminar(id).then((re) => {
        console.log("rip");
      });
    }
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

      {persons
        .filter((e) => e.name.includes(filter))
        .map((el) => (
          <PersonList
            key={el.id}
            data={el}
            deletePerson={() => deletePerson(el.id, el.name)}
          />
        ))}
    </div>
  );
};

export default App;
