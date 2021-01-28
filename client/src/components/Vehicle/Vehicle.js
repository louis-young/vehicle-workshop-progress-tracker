import React from "react";

const Vehicle = ({ vehicle }) => {
  const { registration, make, model, colour, fuel, engine } = vehicle;

  return (
    <>
      {vehicle && (
        <article>
          <ul>
            <li>Registration: {registration}</li>
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
