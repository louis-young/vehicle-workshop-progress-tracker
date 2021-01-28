import React from "react";

const Updates = ({ updates }) => {
  return (
    <ul>
      {updates &&
        updates.map(({ status, technician, action }) => (
          <li key={status}>
            <p>Status: {status}</p>
            {technician && <p>Technician: {technician}</p>}
            {action && <p>Action: {action}</p>}
          </li>
        ))}
    </ul>
  );
};

export default Updates;
