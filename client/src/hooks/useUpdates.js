import { useState, useEffect } from "react";

import { fetchUpdates } from "../api/api";

const useUpdates = (vehicle) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [updates, setUpdates] = useState(false);

  useEffect(() => {
    const getUpdates = async () => {
      if (!vehicle) {
        return;
      }

      setLoading(true);

      try {
        const updates = await fetchUpdates(vehicle);

        setUpdates(updates);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getUpdates();
  }, [vehicle]);

  return { loading, error, updates };
};

export default useUpdates;
