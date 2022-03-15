CREATE DATABASE mySQLhw;

USE mySQLhw;

-- veryEASY

CREATE TABLE veryEasy(
make VARCHAR(20),
model VARCHAR(20),
car_year INT
);

INSERT INTO veryEasy (make, model, car_year)
VALUES("Toyota", "86", 2020),
("Nissan", "Skyline", 1992);

-- EASY

CREATE TABLE easy(
	title VARCHAR(50),
    publish_date DATE,
    author_first VARCHAR(25),
    author_last VARCHAR(30)
);

INSERT INTO easy (title, publish_date, author_first, author_last)
VALUES ("Fortnite Bible", "2030-01-01", "Barack", "Obama"),
("How to quit League of Legends", "1900-01-01", "Jesus", "Christ"),
("How to pull (in git)", "3021-01-01", "Aaron", "Liang"),
("How to lift cars by yourself", "2021-01-01", "Martin", "Lazore"),
("Bacon Egg & Cheese", "2019-01-01", "Marvin", "Renteral");

INSERT INTO easy (title,publish_date, author_first, author_last)
VALUES("Dudes be like", "2021-01-01", "Samuel", "Rivas"),
("Bruh champ", "4021-01-01", "Pog", "Champ");

DELETE FROM easy ORDER BY publish_date LIMIT 1;

SELECT COUNT(*) FROM easy;

-- medium

CREATE TABLE medium(
	title VARCHAR(30),
    release_date DATE,
    rating VARCHAR(5)
);

INSERT INTO medium(title, release_date, rating)
VALUES ("Fortnite Movie", "5021-01-01", "R"),
("Joker", "2019-10-4", "R"),
("League of Legends Movie", "1201-01-01", "G"),
("PogChamp", "2001-01-01", "PG-13"),
("Dudes be like 2", "2031-01-01", "R"),
("Riot Games Sucks", "9999-01-01", "R"),
("Yakuza 4", "2013-01-01", "R"),
("Yakuza 0", "2015-01-01", "R"),
("Yakuza Kiwami 2", "2017-01-01", "R"),
("Fortnite 420", "3333-01-01", "R");

SELECT * FROM medium WHERE title LIKE '%s%' ORDER BY release_date;











