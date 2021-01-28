import React, { useState } from "react";

import { fetchUpdates, fetchVehicle } from "./api/api";

import Search from "./components/Search/Search";
import Updates from "./components/Updates/Updates";
import Vehicle from "./components/Vehicle/Vehicle";
import useVehicle from "./hooks/useVehicle";

const App = () => {
  const [updates, setUpdates] = useState([]);
  const [registration, setRegistration] = useState(null);

  const getUpdates = async (vehicle) => {
    try {
      const updates = await fetchUpdates(vehicle);

      setUpdates(updates.updates);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Garageline</h1>

      <Search setRegistration={setRegistration} />

      <Vehicle registration={registration} />

      <Updates updates={updates} />
    </>
  );
};

export default App;
