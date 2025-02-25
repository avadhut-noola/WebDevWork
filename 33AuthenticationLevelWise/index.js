import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "users",
  password: "admin",
  port: 5432,
});

db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email= req.body.username;
  const password= req.body.password;

  try {
    const checkUser = await db.query("SELECT username FROM users WHERE username = $1", [email])

    if(checkUser.rows.length > 0) {
      res.send("The email address provided is already in use, Try logging in.");
    } else {
        await db.query("INSERT INTO users (username, password) VALUES ($1, $2)", [email, password]);
        res.render("secrets.ejs");
      }
  } catch(err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email= req.body.username;
  const password= req.body.password;

  try {
    const result = await db.query("SELECT username, password FROM users WHERE username = $1", [email])

    if(result.rows.length > 0) {

      if(password === result.rows[0].password) {
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect Password");
      }
    } else {
      res.send("The email address is not registered, register yourself");
    }

  } catch(err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
