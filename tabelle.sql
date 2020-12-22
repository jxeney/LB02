CREATE DATABASE guestbookdb5;

USE guestbookdb5;

CREATE TABLE eintrag (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  titel VARCHAR(50),
  text VARCHAR(1000),
  autor VARCHAR (100),
  email VARCHAR (100),
  datum DATE
);

USE guestbookdb5;

/* Blog-Eintrag */
INSERT INTO eintrag (text, autor, email, datum) VALUES
  ('Sehr zufrieden', 'Max Muster','max.muster@gmail.com',CURDATE());

INSERT INTO eintrag (text, autor, email, datum) VALUES
  ('Mangelhafte Dienstleistunf', 'Mara Muster','mara.muster@gmail.com',CURDATE());

INSERT INTO eintrag (text, autor, email, datum) VALUES
  ('Freundlicher Service', 'Milk Muster','Milk.muster@gmail.com',CURDATE());

INSERT INTO eintrag (text, autor, email, datum) VALUES
  ('In Ordnung', 'Meier Muster','Meier.muster@gmail.com',CURDATE());

INSERT INTO eintrag (text, autor, email, datum) VALUES
  ('Sehr erfreut', 'Mirna Muster','Mirna.muster@gmail.com',CURDATE());

INSERT INTO eintrag (text, autor, email, datum) VALUES
  ('nie wieder', 'Moe Muster','Moe.muster@gmail.com',CURDATE());

select autor from eintrag

