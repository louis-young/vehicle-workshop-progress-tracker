import React, { useState } from "react";
import Search from "./components/Search/Search";

const formatRegistration = (registration) => {
  const formattedRegistration = registration.replace(/ /g, "").toUpperCase();

  return formattedRegistration;
};

const App = () => {
  const [vehicle, setVehicle] = useState({});

  const search = async (registration) => {
    try {
      const formattedRegistration = formatRegistration(registration);

      const url = `http://localhost:5000/vehicles/search?registration=${formattedRegistration}`;

      const response = await fetch(url);

      const vehicle = await response.json();

      setVehicle(vehicle);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Garageline</h1>
      <Search search={search} />

      <p>{vehicle.colour}</p>
    </>
  );
};

export default App;
