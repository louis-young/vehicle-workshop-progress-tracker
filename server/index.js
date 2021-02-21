import express from "express";
import dotenv from "dotenv";
import knex from "./knex/knex.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));

app.get("/users", async (request, response) => {
  const users = await knex("users");

  response.json(users);
});

app.get("/users/:id", async (request, response) => {
  const { id } = request.params;

  const user = await knex("users").where({ id }).first();

  response.json(user);
});

app.post("/users/add", async (request, response) => {
  try {
    const { name, email } = request.body;

    if (!name || !email) {
      return response.status(400).json({ message: "Please fill in all fields." });
    }

    const existingUser = await knex("users").where({ email }).first();

    if (existingUser) {
      return response.status(400).json({ message: "A user with this email already exists." });
    }

    const user = await knex("users").insert({ name, email });

    response.json(user);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

app.get("/vehicles/:registration", async (request, response) => {
  try {
    const { registration } = request.params;

    const vehicle = await knex("vehicles")
      .select(["vehicles.registration", "users.name"])
      .where({ registration })
      .innerJoin("users", "users.id", "vehicles.owner_id");

    response.json(vehicle);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});
