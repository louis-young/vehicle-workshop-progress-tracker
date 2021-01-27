import React, { useState } from "react";
import Search from "./components/Search/Search";

const formatRegistration = (registration) => {
  const formattedRegistration = registration.replace(/ /g, "").toUpperCase();

  return formattedRegistration;
};

const App = () => {
  const [vehicle, setVehicle] = useState({});

  const [updates, setUpdates] = useState([]);

  const search = async (registration) => {
    try {
      const formattedRegistration = formatRegistration(registration);

      const url = `http://localhost:5000/vehicles/search/${formattedRegistration}`;

      const response = await fetch(url);

      const vehicle = await response.json();

      setVehicle(vehicle);

      getUpdates(vehicle._id);
    } catch (error) {
      console.error(error);
    }
  };

  const getUpdates = async (vehicle) => {
    try {
      const url = `http://localhost:5000/updates/${vehicle}`;

      const response = await fetch(url);

      const updates = await response.json();

      setUpdates(updates.updates);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(updates);

  return (
    <>
      <h1>Garageline</h1>
      <Search search={search} />

      <p>{vehicle.registration}</p>
      <p>{vehicle.colour}</p>

      {updates.map(({ status, technician }) => (
        <li>
          <p>Status: {status}</p>
          {technician && <p>Technician: {technician}</p>}
        </li>
      ))}
    </>
  );
};

export default App;
