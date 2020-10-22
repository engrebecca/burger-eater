-- Drops the database if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Creates the database and uses it
CREATE DATABASE burgers_db;

USE burgers_db;

-- Creates the table
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR (255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT FALSE
);