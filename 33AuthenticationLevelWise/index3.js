import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { Strategy } from "passport-local";
import env from "dotenv";

const app = express();
const port = 3000;
const saltRounds = 15; // for salting the hashed password
env.config(); //Make sure initialize add this every time

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
    session({
        secret: process.env.SESSION_SECRET, // Here's how you use the env variables
        resave: false,
        saveUninitialized: false,
    })
);

//Use the passport module with created session
app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT, // Updating the database credentials with env variables
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
    console.log("User:", req.user); // Check if user exists in the session
    console.log("Authenticated:", req.isAuthenticated()); // Check session status
    
    if (req.isAuthenticated()) {
        res.render("secrets.ejs");
    } else {
        res.redirect("/login");
    }
});

//Specifying the profile scope for GoogleAuth
app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

//After authentication this route will be used to get the redirection
app.get(
    "/auth/google/secrets",
    passport.authenticate("google", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
    })
);

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
                    if (err) {
                        console.log("Login error after registration:", err);
                        res.redirect("/login");
                    } else {
                        res.redirect("/secrets");
                    }
                });
            }
            });
        }
        } catch(err) {
        console.log(err);
        }
});


//local login route
app.post(
    "/login",
    passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
    })
);

app.get("/logout", (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
  });

//Local strategy
passport.use("local",
    new Strategy(async function verify(username, password, cb){
        try {
            const result = await db.query("SELECT username, password FROM users WHERE username = $1", [username])
            console.log(username);

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

//Google strategy
passport.use(
    "google",
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/secrets",
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    async (accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        try {

            const email = profile.emails?.[0]?.value;  // Extract email from google response 
            const result = await db.query("SELECT * FROM users WHERE username = $1", [email]);

            let user;
            //If user is not present
            if(result.rows.length === 0) {
                const newUser = await db.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *", [profile.emails[0].value, "google"]);
                user = newUser.rows[0];
                return cb(null, newUser.rows[0]);

            } else {
                //If user exists
                user = result.rows[0];
                return cb(null, user);
            }

            console.log("User after Google Authentication: ", user);
        } catch(err) {
            cb(err);
        }
    }
));

// Serialize the user object into the session cookie
passport.serializeUser((user, cb) => {
    console.log("Serializing user:", user); // Debugging
    cb(null, user.username);
});
// Deserialize the user object from the session cookie
passport.deserializeUser(async (username, cb) => {
    try {
        console.log("Deserializing user:", username); // Debugging
        const result = await db.query("SELECT * FROM users WHERE username = $1", [username]);
        if (result.rows.length > 0) {
            cb(null, result.rows[0]);
        } else {
            cb(null, false);
        }
    } catch (err) {
        cb(err);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
