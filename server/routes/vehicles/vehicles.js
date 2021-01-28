import { Router } from "express";

import Vehicle from "../../models/Vehicle.js";

const router = Router();

router.post("/add", async (request, response) => {
  try {
    const { registration, make, model, colour, fuel, engine } = request.body;

    if (!registration || !make || !model || !colour || !fuel || !engine) {
      return response.status(400).json({ message: "Please fill in all fields." });
    }

    const existingVehicle = await Vehicle.findOne({ registration });

    if (existingVehicle) {
      return response.status(400).json({ message: "A vehicle with this registration already exists." });
    }

    const vehicle = new Vehicle({
      registration: registration.trim().toUpperCase(),
      make,
      model,
      colour,
      fuel,
      engine,
    });

    const savedVehicle = await vehicle.save();

    response.json(savedVehicle);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

router.get("/search/:registration", async (request, response) => {
  try {
    const { registration } = request.params;

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
