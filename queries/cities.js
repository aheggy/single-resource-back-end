const db = require("../db/dbConfig.js");

// ALL CITIE
const getAllCities = async () => {
  try {
    const allCities = await db.any("SELECT * FROM cities");
    return allCities;
  } catch (error) {
    return error;
  }
};

// ONE CITIE
const getCitie = async (id) => {
  try {
    const oneCitie = await db.one("SELECT * FROM cities WHERE id=$1", id);
    return oneCitie;
  } catch (error) {
    return error;
  }
};

// CREATE (POST)
const createCitie = async (citie) => {
  try {
    const newCitie = await db.one(
      "INSERT INTO cities (name, country,population, url,is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        citie.name,
        citie.country,
        citie.population,
        citie.url,
        citie.is_favorite,
      ]
    );
    return newCitie;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteCitie = async (id) => {
  try {
    const deletedCitie = await db.one(
      "DELETE FROM cities WHERE id = $1 RETURNING *",
      id
    );
    return deletedCitie;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateCitie = async (id, citie) => {
  try {
    const updatedCitie = await db.one(
      "INSERT INTO cities (name, country,population, url,is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        citie.name,
        citie.country,
        citie.population,
        citie.url,
        citie.is_favorite,
      ]
    );
    return updatedCitie;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCities,
  getCitie,
  createCitie,
  deleteCitie,
  updateCitie,
};
