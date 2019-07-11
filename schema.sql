-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;

-- Creates the "burgers" database --
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);