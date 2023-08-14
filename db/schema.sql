DROP DATABASE IF EXISTS cities_db;
CREATE DATABASE cities_db;

\c cities_db;

CREATE TABLE cities (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 country TEXT,
 population INTEGER,
 url TEXT,
 is_favorite BOOLEAN
);
