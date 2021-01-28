import express from "express";

import Update from "../../models/Update.js";

const router = express.Router();

router.post("/create", async (request, response) => {
  try {
    const { status, technician, action, id } = request.body;

    if (!status || !id) {
      return response.status(400).json({ message: "Please provide a status and vehicle ID." });
    }

    const existingStatus = await Update.findOne({ vehicle: id, status });

    if (existingStatus) {
      return response.status(400).json({ message: "An update for this vehicle with this status already exists." });
    }

    const update = new Update({
      status,
      technician,
      action,
      vehicle: id,
    });

    const savedUpdate = await update.save();

    response.json(savedUpdate);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ message: "Please provide a vehicle ID." });
    }

    const updates = await Update.find({ vehicle: id });

    if (!updates.length) {
      return response.status(400).json({ message: "No updates found." });
    }

    response.json({ updates });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

export default router;
