import express from "express";

import Vehicle from "../../models/Vehicle.js";

const router = express.Router();

router.post("/create", async (request, response) => {
  try {
    const { registration, colour } = request.body;

    if (!registration || !colour) {
      return response.status(400).json({ message: "Please fill in all fields." });
    }

    const existingVehicle = await Vehicle.findOne({ registration });

    if (existingVehicle) {
      return response.status(400).json({ message: "A vehicle with this registration already exists." });
    }

    const vehicle = new Vehicle({
      registration: registration.trim().toUpperCase(),
      colour,
    });

    const savedVehicle = await vehicle.save();

    response.json(savedVehicle);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

router.get("/search", async (request, response) => {
  try {
    const { registration } = request.query;

    if (!registration) {
      return response.status(400).json({ message: "Please provide a registration." });
    }

    const vehicle = await Vehicle.findOne({ registration });

    if (!vehicle) {
      return response.status(400).json({ message: "No vehicle found." });
    }

    response.json(vehicle);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

export default router;
