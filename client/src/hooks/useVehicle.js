import { useState, useEffect } from "react";

import { fetchVehicle } from "../api/api";

const useVehicle = (registration) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [vehicle, setVehicle] = useState(false);

  useEffect(() => {
    const getVehicle = async () => {
      if (!registration) {
        return;
      }

      setLoading(true);

      try {
        const vehicle = await fetchVehicle(registration);

        setVehicle(vehicle);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getVehicle();
  }, [registration]);

  return { loading, error, vehicle };
};

export default useVehicle;
