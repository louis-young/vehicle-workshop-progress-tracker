import { formatRegistration } from "../utilities/utilities";

const fetchVehicle = async (registration) => {
  const formattedRegistration = formatRegistration(registration);

  const url = `${process.env.REACT_APP_API_BASE_URL}/vehicles/search/${formattedRegistration}`;

  const response = await fetch(url);

  const vehicle = await response.json();

  return vehicle;
};

const fetchUpdates = async (vehicle) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/updates/${vehicle}`;

  const response = await fetch(url);

  const updates = await response.json();

  return updates;
};

export { fetchVehicle, fetchUpdates };
