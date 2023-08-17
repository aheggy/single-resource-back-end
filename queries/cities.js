const db = require("../db/dbConfig.js");

// ALL CITIES
const getAllCities = async () => {
  try {
    const allCities = await db.any("SELECT * FROM cities");
    return allCities;
  } catch (error) {
    console.error("Error fetching all cities:", error);
    return error;
  }
};

// ONE CITIE
const getCity = async (id) => {
  try {
    const oneCity = await db.one("SELECT * FROM cities WHERE id=$1", id);
    return oneCity;
  } catch (error) {
    return error;
  }
};

// CREATE (POST)
const createCity = async (city) => {
  try {
    const newCity = await db.one(
      "INSERT INTO cities (city, country,population, url,is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        city.city,
        city.country,
        city.population,
        city.url,
        city.is_favorite,
      ]
    );
    return newCity;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteCity = async (id) => {
  try {
    const deletedCity = await db.one(
      "DELETE FROM cities WHERE id = $1 RETURNING *",
      id
    );
    return deletedCity;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateCity = async (id, city) => {
  try {
    const updatedCity = await db.one(
      "UPDATE cities SET city=$1, country=$2, population=$3, url=$4, is_favorite=$5 WHERE id =$6 RETURNING *",
      [
        city.city,
        city.country,
        city.population,
        city.url,
        city.is_favorite,
        id,
      ]
    );
    return updatedCity;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCities,
  getCity,
  createCity,
  deleteCity,
  updateCity,
};
