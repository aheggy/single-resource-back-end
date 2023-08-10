const express = require("express");
const cities = express.Router();

const {
  getAllCities,
  getCitie,
  createCitie,
  deleteCitie,
  updateCitie,
} = require("../queries/cities.js");

//INDEX
cities.get("/", async (req, res) => {
  const allCities = await getAllCities();
  if (allCities[0]) {
    res.status(200).json(allCities);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//SHOW ROUTE
cities.get("/:id", async (req, res) => {
  const { id } = req.params;
  const citie = await getCitie(id);
  if (citie) {
    res.status(200).json(citie);
  } else {
    res.status(404).json({ error: "not found!" });
  }
});

//CREATE ROUTE
cities.post("/", async (req, res) => {
  try {
    const citie = await createCitie(req.body);
    res.json(citie);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE ROUTE
cities.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCitie = await deleteCitie(id);
  if (deletedCitie) {
    res.status(200).json(deletedCitie);
  } else {
    res.status(404).json("Citie not found");
  }
});

//UPDATE ROUTE
cities.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedCitie = await updateCitie(id, req.body);
  res.status(200).json(updatedCitie);
});

module.exports = cities;
