
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

INSERT INTO personal (name, location) VALUES ('Elliot Alderson', 'New York City');
INSERT INTO work (place, comment, from_year, to_year) VALUES ('Allsafe Cybersecurity','Cybersecurity Engineer','2010','2014');
INSERT INTO education (place, comment, from_year, to_year) VALUES ('Selftaught','H4ck3r','2005','2010');
