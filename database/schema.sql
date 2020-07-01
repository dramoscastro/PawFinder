DROP DATABASE IF EXISTS PawFinder;

CREATE DATABASE PawFinder;

USE PawFinder;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
	email VARCHAR (255),
	username VARCHAR (255),
	zipcode VARCHAR (5),
    PRIMARY KEY(id)
);
CREATE TABLE userpets(
	id INT NOT NULL AUTO_INCREMENT,
	pet_id INT NOT NULL ,
    user_id INT NOT NULL,
	PRIMARY KEY(id)
);