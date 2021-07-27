import React, { useState, useEffect } from "react";
import FiltredCountry from "./components/FiltredCountry";
import axios from "axios";

const App = () => {
  const [dataCountry, setDataCountry] = useState([]);
  const [countriesFiltred, setCountriesFiltred] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setDataCountry(response.data);
    });
  }, []);

  const handleChangeSearch = (event) => {
    setCountriesFiltred(
      dataCountry.filter((e) => e.name.includes(event.target.value))
    );
  };

  return (
    <div>
      <p>
        find country
        <input onChange={handleChangeSearch} />
      </p>
      <FiltredCountry info={countriesFiltred} search={handleChangeSearch} />
    </div>
  );
};

export default App;
