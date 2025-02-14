CREATE TABLE world_food (
    id SERIAL PRIMARY KEY,
    country VARCHAR(255),
    rice_production FLOAT,
    wheat_production FLOAT
);

-- All forms of SELECT statements

--All means *
SELECT * FROM world_food;

--single column specified after SELECT keyword
SELECT country FROM world_food;

--multi-columns specified after SELECT keyword
SELECT country, wheat_production
FROM world_food;


--WHERE clause(condition) specified after selected table
SELECT rice_production
FROM world_food
WHERE country = 'United States';

--WHERE clause with comparisons specified after selected table
SELECT country
FROM world_food
WHERE wheat_production > 20;


--WHERE clause with LIKE operator for pattern matching
-- || pipe symbol concatenates in SQL
SELECT country
FROM world_food
WHERE country LIKE 'U' || '%'; --countries starting from letter U


--WHERE clause with LIKE operator for pattern matching
SELECT country
FROM world_food
WHERE country LIKE '%' || 'a'; --countries ending with letter a