import express from "express";

import Client from "../../models/Client.js";

const router = express.Router();

router.post("/create", async (request, response) => {
  try {
    const { name, email } = request.body;

    if (!name || !email) {
      return response.status(400).json({ message: "Please fill in all fields." });
    }

    const existingClient = await Client.findOne({ email });

    if (existingClient) {
      return response.status(400).json({ message: "A client with this email address already exists." });
    }

    const client = new Client({
      name,
      email,
    });

    const savedClient = await client.save();

    response.json(savedClient);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

export default router;
