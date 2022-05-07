-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS movieList;
CREATE DATABASE movieList;

USE movieList;


-- Table 'MovieList'


DROP TABLE IF EXISTS `MovieList`;

CREATE TABLE movie (
  id INTEGER(11) NULL AUTO_INCREMENT,
  title VARCHAR(225) NOT NULL DEFAULT 'NULL',
  watched VARCHAR(25) NOT NULL DEFAULT 'Not Watched',
  PRIMARY KEY (id)
);

-- CREATE TABLE movie (id INTEGER(11) NOT NULL AUTO_INCREMENT, title VARCHAR(225) NOT NULL DEFAULT 'NULL', watched VARCHAR(25) NOT NULL DEFAULT 'Not Watched', PRIMARY KEY (id));

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

--  INSERT INTO movie(title, watched)
--  VALUES
--  ('Mean Girls', 0),
--  ('Hackers', 0),
--  ('The Grey', 0),
--  ('Sunshine', 0),
--  ('Ex Machina', 0),
--  ('The Room', 0);

--  mysql> INSERT INTO movie(title, watched) VALUES ('Mean Girls', 'Watched'), ('Hackers', 'Watched'), ('The Grey', 'Watched'), ('Sunshine', 'Watched'), ('Ex Machina', 'Watched'), ('The Room', 'Watched');