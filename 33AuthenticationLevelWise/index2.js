import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";

const app = express();
const port = 3000;
const saltRounds = 15; // for salting the hashed password

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
    session({
        secret: "New$eret#369",
        resave: false,
        saveUninitialized: true,
    })
);

//Use the passport module with created session
app.use(passport.initialize());
app.use(passport.session());

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

//To check the the authentication separate route to secrets.
app.get("/secrets", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("secrets.ejs");
    } else {
        res.redirect("/login");
    }
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
              // here RETURNING query means the inserted data will be returned as result.
                const result = await db.query(
                "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
                [email, hash]
                );
                //after registration
                const user = result.rows[0];

                //now instead of rendering whole EJS we'll just redirect to route directly.
                req.login(user, (err) => {
                    console.log("success");
                    res.redirect("/secrets");
                });
            }
            });
        }
        } catch(err) {
        console.log(err);
        }
});

app.post(
    "/login",
    passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
    })
);

passport.use(
    new Strategy(async function verify(username, password, cb){
        try {
            const result = await db.query("SELECT username, password FROM users WHERE username = $1", [username])

            if(result.rows.length > 0) {
            const user = result.rows[0]; // to pass if authenticated
            const storedHashedPassword = result.rows[0].password;

            //comparing user entered password with stored hashed password
            bcrypt.compare(password, storedHashedPassword, async (err, result) => {
                if(err) {
                    console.log("Error comparing hashed password: ", err);
                    return cb(err);
                } else {
                  // if result is true then allow the access
                    if(result) {
                        // if user is authenticated then callback as null error and the user information
                        //user info will be retrieved from database directly. (Check the SELECT query)
                        return cb(null, user);
                } else {
                    //if password is wrong then it's not a system error
                    // the user will be false in this case
                    // this will indicate isAuthenticated login route as false.
                    return cb(null, false);
                }
                }
            });
            } else {
                return cb("User not found");
            }
        } catch(err) {
            console.log(err);
        }
    }
));

// Serialize the user object into the session cookie
passport.serializeUser((user, cb) => {
    cb(null, user);
});

// Deserialize the user object from the session cookie
passport.deserializeUser((user, cb) => {
    cb(null, user);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
