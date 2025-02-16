CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);

-- One to One --
CREATE TABLE contact_detail (
  id INTEGER REFERENCES student(id) UNIQUE,
  tel TEXT,
  address TEXT
);

-- Data --
INSERT INTO student (first_name, last_name)
VALUES ('Avadhut', 'Noola');
INSERT INTO contact_detail (id, tel, address)
VALUES (1, '+123456789', '123 Washington DC');

-- Join --
SELECT * 
FROM student
JOIN contact_detail
ON student.id = contact_detail.id


