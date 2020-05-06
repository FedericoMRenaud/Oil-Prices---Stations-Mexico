-- Verefy tables:
DROP TABLE IF EXISTS price_apr21_2020;
DROP TABLE IF EXISTS price_state;
DROP TABLE IF EXISTS price_time_serie;

-- Create Tables

-- Table Prices April 21, 2020:
CREATE TABLE price_apr21_2020 (
	id SERIAL PRIMARY KEY,
	"Longitud" NUMERIC,
	"Latitud" NUMERIC,
	"ID_CRE" TEXT,
	"Razon_Social" TEXT,
	"Colonia" TEXT,
	"CP" TEXT,
	"Municipio" TEXT,
	"Entidad" TEXT,
	"Franquicia_Marca" TEXT,
	"Gas87" NUMERIC, 
	"Gas91" NUMERIC,
	"Diesel" NUMERIC
);

-- Table Average Price by State
CREATE TABLE price_state (
	id SERIAL PRIMARY KEY,
	"Entidad" TEXT,
	"Year" INT, 
	"Month" INT,
	"Gas87" NUMERIC, 
	"Gas91" NUMERIC,
	"Diesel" NUMERIC,
	"Longitud" NUMERIC,
	"Latitud" NUMERIC
);

-- Table Time Serie Average Price
CREATE TABLE price_time_serie (
	id SERIAL PRIMARY KEY,
	"Fecha" TEXT,
	"Gas87" NUMERIC, 
	"Gas91" NUMERIC,
	"Diesel" NUMERIC
);
