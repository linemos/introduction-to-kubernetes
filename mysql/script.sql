
CREATE DATABASE cvdatabase;

USE cvdatabase;

CREATE TABLE personal(
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE work(
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  place VARCHAR(255) NOT NULL,
  comment VARCHAR(255) NOT NULL,
  from_year VARCHAR(255) NOT NULL,
  to_year VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE education(
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  place VARCHAR(255) NOT NULL,
  comment VARCHAR(255) NOT NULL,
  from_year VARCHAR(255) NOT NULL,
  to_year VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO personal (name, location) VALUES ('Your name', 'Oslo');
INSERT INTO work (place, comment, from_year, to_year) VALUES ('Your company','your position','year','year');
INSERT INTO education (place, comment, from_year, to_year) VALUES ('Your school','study','year','year');
