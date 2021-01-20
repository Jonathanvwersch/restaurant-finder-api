require("dotenv").config();
const express = require("express");
const cors = require("cors")

const app = express();
const db = require("./db");

app.use(cors())
app.use(express.json());

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");
    
    res.status(200).json({
      status: "success",
      de: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
  }
});

// Get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants where id=$1", [
      req.params.id,
    ]);
    console.log(req.params);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
  }
});

// Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
        res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
  }
});

// Update restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id=$4 RETURNING *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
  }
});

// Delete restaurants
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM restaurants WHERE id=$1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
  }
});

const port = process.env.PORT || 3006;

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
