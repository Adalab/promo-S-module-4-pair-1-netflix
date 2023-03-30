CREATE DATABASE Netflix;
USE Netflix;

CREATE TABLE Movies (
id int auto_increment primary key not null,
title varchar(45) not null,
genre varchar(45) not null,
image varchar(1000) not null,
category varchar(45) not null,
year date
);

CREATE TABLE Users (
idUser int auto_increment primary key not null,
user varchar(45) not null,
pasword varchar(45) not null,
name varchar(45) not null,
email varchar(45) not null,
plan_details varchar(45) not null
);

CREATE TABLE Actors (
idActor int auto_increment primary key not null,
name varchar(45) not null,
lastname varchar(45) not null,
country varchar(45) not null,
birthday date
);

INSERT INTO Movies (title, genre, image, category, yearMovie)
VALUES ("Pulp Fiction", "Crimen", "https://pics.filmaffinity.com/pulp_fiction-210382116-large.jpg", "Top 10", 1994),
("La vita è bella", "Comedia", "https://pics.filmaffinity.com/la_vita_e_bella-646167341-mmed.jpg", "Top 10", 1996),
("Forrest Gump", "Comedia", "https://pics.filmaffinity.com/forrest_gump-212765827-mmed.jpg", "Top 10", 1994);

INSERT INTO users (user, password, name, email, plan_details) 
VALUES ("laura_dev", "laura", "Laura", "laura@gmail.com", "Standard"),
("maria_dev", "maria", "Maria", "maria@gmail.com", "Standard"),
("ester_dev", "ester", "Ester", "ester@gmail.com", "Standard");

INSERT INTO actors (name, lastname, country, birthday) 
VALUES ("Tom", "Hanks", "Estados Unidos", "1956-06-09"),
("Roberto", "Benigni", "Italia", "1952-10-27"),
("John", "Travolta", "Estados Unidos", "1954-02-18");

SELECT * FROM movies;

SELECT title, genre FROM movies
WHERE yearMovie >= 1990;

SELECT title FROM movies
WHERE category = "Top 10";

UPDATE movies SET yearMovie = "1997"
WHERE id = 2;

SELECT * FROM Actors;

SELECT name, lastname FROM Actors
WHERE birthday BETWEEN "1950-01-01" AND "1960-12-31";

SELECT name, lastname FROM Actors
WHERE country = "Estados Unidos";

SELECT * FROM users;

SELECT user FROM Users
WHERE plan_details = "Standard";

DELETE FROM users
WHERE name LIKE "m%";

SELECT * FROM users;

CREATE TABLE rel_movies_users (
  idRel int not null auto_increment primary key,
  fkMovie int not null,
  fkUser int not null,
  FOREIGN KEY (fkMovie) REFERENCES movies(id),
  FOREIGN KEY (fkUser) REFERENCES users(idUser)
  );

SELECT * FROM Movies;
SELECT * FROM rel_movies_users;

INSERT INTO rel_movies_users (fkUser, fkMovie)
VALUES (1,1), (1,2), (2,2);

CREATE TABLE rel_movies_actors (
  id int not null auto_increment primary key,
  fkMovie int not null,
  fkActor int not null,
  FOREIGN KEY (fkMovie) REFERENCES movies(id),
  FOREIGN KEY (fkActor) REFERENCES actors(idActor)
  );
  
  INSERT INTO rel_movies_actors (fkMovie, fkActor)
  VALUES (1,3), (2,2), (3,1);

SELECT * FROM rel_movies_actors;


















