import React from "react";

import useUpdates from "../../hooks/useUpdates";

const Updates = ({ vehicle }) => {
  const { loading, error, updates } = useUpdates(vehicle._id);

  if (loading) {
    return <p>Loading updates...</p>;
  }

  if (error) {
    return <p>Error loading updates.</p>;
  }

  if (vehicle && !updates) {
    return <p>No updates.</p>;
  }

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
