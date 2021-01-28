import React, { useState } from "react";

import Search from "./components/Search/Search";
import Updates from "./components/Updates/Updates";
import Vehicle from "./components/Vehicle/Vehicle";
import useVehicle from "./hooks/useVehicle";

const App = () => {
  const [registration, setRegistration] = useState(null);

  const { loading, error, vehicle } = useVehicle(registration);

  if (loading) {
    return <p>Loading vehicle...</p>;
  }

  if (error) {
    return <p>Error loading vehicle.</p>;
  }

  return (
    <>
      <h1>Garageline</h1>

      <Search setRegistration={setRegistration} />

      <Vehicle vehicle={vehicle} />

      <Updates vehicle={vehicle} />
    </>
  );
};

export default App;
