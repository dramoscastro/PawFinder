DROP DATABASE IF EXISTS PawFinder;

CREATE DATABASE PawFinder;

USE PawFinder;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    last name varchar(255) NOT NULL,
	email VARCHAR (255),
	username VARCHAR (255),
	city VARCHAR (255),
	state VARCHAR (10),
    PRIMARY KEY(id)
);
CREATE TABLE userpets(
	id INT NOT NULL AUTO_INCREMENT,
	text varchar(255) NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);