import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "helloWorld",
  password: "admin",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


//Separating the GET request and database communication
async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisited();
  res.render("index.ejs", { countries: countries, total: countries.length }) // passing to EJS
});

app.post("/add", async (req, res) => {
  const inputCountry = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]); // Retrieve country code

        const data = result.rows[0];
        const countryCode = data.country_code;

        try {
        await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
          countryCode,
        ]);
        res.redirect("/");
      } catch (err) {
        console.log(err);
        const countries = await checkVisited();
        res.render("index.ejs",
          {
            countries: countries,
            total: countries.length,
            error: "Country has already been added, please try again.",
          }); //  pass the error back
      }
    } catch(err) {
      console.log(err);
      const countries = await checkVisited();
      res.render("index.ejs",
        {
          countries: countries,
          total: countries.length,
          error: "Country does not exists, please try again.",
        }); //  pass the error back
    }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
