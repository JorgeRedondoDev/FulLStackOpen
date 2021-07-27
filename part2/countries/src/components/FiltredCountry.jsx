import React, { useState } from "react";
import axios from "axios";

const FiltredCountry = ({ info }) => {
  const api_key = "3638291943e21ab2d49d0e44e43834d0";
  const [listWheader, setlistWeather] = useState([]);
  const [listShow, setListShow] = useState([]);

  const showEvent = (event) => {
    console.log(event);
  };

  console.log(info);
  if (info.length > 10) {
    return <p>Too Many matches, specify another filter</p>;
  }

  if (info.length == 1) {
    const params = {
      access_key: "3638291943e21ab2d49d0e44e43834d0",
      query: info[0].capital,
    };

    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        const apiResponse = response.data;
        console.log(apiResponse);
      })
      .catch((error) => {
        console.log(error);
      });

    return (
      <div>
        {info.map((el) => (
          <div key={el.name}>
            <h2> {el.name}</h2>
            <p>capital {el.capital}</p>
            <p>population {el.population}</p>
            <h3>languages</h3>
            {el.languages.map((lan) => (
              <ul key={lan.name}> {lan.name}</ul>
            ))}
            <img src={el.flag} width="100" height="100"></img>
            <h3>Weather in {apiResponse.capital}</h3>
            <p>temperature: {apiResponse.temperature} Celsius</p>
            <img src={apiResponse.weather_icons}></img>
            <p>
              wind:{apiResponse.wind_speed}mph direction {apiResponse.wind_dir}{" "}
            </p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {info.map((el) => (
          <div>
            <p key={el.name}>
              {el.name}{" "}
              <button onClick={() => setListShow([...listShow, `${el.name}`])}>
                click
              </button>
            </p>
            {listShow.includes(el.name) ? (
              <div key={el.capital}>
                <p>capital {el.capital}</p>
                <p>population {el.population}</p>
                <h3>languages</h3>
                {el.languages.map((lan) => (
                  <ul key={lan.name}> {lan.name}</ul>
                ))}
                <img src={el.flag} width="100" height="100"></img>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
};

export default FiltredCountry;
