DROP DATABASE IF EXISTS cities_dev;
CREATE DATABASE cities_dev;

\c cities_dev;

CREATE TABLE cities (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 country TEXT,
 population INTEGER,
 url TEXT,
 is_favorite BOOLEAN
);
