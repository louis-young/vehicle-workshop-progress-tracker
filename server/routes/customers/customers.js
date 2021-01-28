import { Router } from "express";

import Customer from "../../models/Customer.js";

const router = Router();

router.post("/add", async (request, response) => {
  try {
    const { name, email } = request.body;

    if (!name || !email) {
      return response.status(400).json({ message: "Please fill in all fields." });
    }

    const existingCustomer = await Customer.findOne({ email });

    if (existingCustomer) {
      return response.status(400).json({ message: "A customer with this email address already exists." });
    }

    const customer = new Customer({
      name,
      email,
    });

    const savedCustomer = await customer.save();

    response.json(savedCustomer);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

export default router;
