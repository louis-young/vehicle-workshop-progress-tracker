import React from "react";

import useVehicle from "../../hooks/useVehicle";

const Vehicle = ({ registration }) => {
  const { loading, error, vehicle } = useVehicle(registration);

  const { registration: reg, make, model, colour, fuel, engine } = vehicle;

  if (loading) {
    return <p>Loading vehicle...</p>;
  }

  if (error) {
    return <p>Error loading vehicle.</p>;
  }

  return (
    <>
      {vehicle && (
        <article>
          <ul>
            <li>Registration: {reg}</li>
            <li>Make: {make}</li>
            <li>Model: {model}</li>
            <li>Colour: {colour}</li>
            <li>Fuel: {fuel}</li>
            <li>Engine: {engine}cc</li>
          </ul>
        </article>
      )}
    </>
  );
};

export default Vehicle;
