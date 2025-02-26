import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;
const saltRounds = 15; // for salting the hashed password

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
      //Before storing the data onto database perform hashing
      // password will be hashed through bcrypt module

      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.log("Error while hashing password: ", err);
        } else {
          // instead of password now we'll pass the generated hash.
          const result = await db.query(
            "INSERT INTO users (username, password) VALUES ($1, $2)",
            [email, hash]
          );
          res.render("secrets.ejs");
        }
      });
    }
  } catch(err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email= req.body.username;
  const loginPassword= req.body.password;
  try {
    const result = await db.query("SELECT username, password FROM users WHERE username = $1", [email])

    if(result.rows.length > 0) {

      const storedHashedPassword = result.rows[0].password;
      //comparing user entered password with stored hashed password
      bcrypt.compare(loginPassword, storedHashedPassword, async (err, result) => {
        if(err) {
          console.log("Error comparing hashed password: ", err);
        } else {
          // if result is true then allow the access
          if(result) {
            res.render("secrets.ejs");
          } else {
            res.send("Incorrect Password");
          }
        }
      });
    } else {
      res.send(`
        <script>
            alert("The email address is not registered. Please sign up.");
            window.location.href = "/login";
        </script>
    `);
    }

  } catch(err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
