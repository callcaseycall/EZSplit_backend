import express from "express";
const router = express.Router();
export default router;

import { getCustomers, createCustomer, getCustomerById } from "#db/queries/customer";
import requireBody from "#middleware/requireBody";
import { createToken } from "#utils/jwt";


// get all customer, customer by id & post

// Create customer
router.route("/")
  .get(async (req, res) => {
    const customers = await getCustomers();
    res.send(customers);
  })

router.post(
  "/",
  requireBody("name", "email", "phone_number"),
  async (req, res) => {
    const { name, email, phone_number } = req.body;
    try {
      const customer = await createCustomer(name, email, phone_number);
      const token = createToken(customer.id);
      res.status(201).json({ customer, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create customer" });
    }
  }
);


// get customer by id & post

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await getCustomerById(id);
    res.status(200).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve customer by ID" });
  }
});
















// Test routes for development/testing purposes
router.get("/test/health", (req, res) => {
  res.status(200).json({
    message: "Customer router is working",
    timestamp: new Date().toISOString(),
    endpoints: {
      "GET /:id": "Get customer by ID",
      "POST /": "Create new customer (requires name, email, phone_number)",
    },
  });
});

// Mock test route to simulate customer creation without saving to DB //--------
router.get("/test/mock-customer", async (req, res) => {
  try {
    // Test with a mock customer creation
    const mockData = {
      name: "Test Customer",
      email: "test@example.com",
      phone_number: "555-0123",
    };

    res.status(200).json({
      message: "Mock customer data (not saved to database)",
      mockCustomer: mockData,
      note: "Use POST / to actually create a customer",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Mock test failed" });
  }
});

router.post("/test/validate", (req, res) => {
  const { name, email, phone_number } = req.body;

  const validation = {
    name: !!name,
    email: !!email && email.includes("@"),
    phone_number: !!phone_number,
  };

  const isValid = Object.values(validation).every(Boolean);

  res.status(200).json({
    message: "Validation test for customer data",
    validation,
    isValid,
    receivedData: { name, email, phone_number },
  });
});
