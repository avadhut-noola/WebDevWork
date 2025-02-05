import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
// var userIsAuthorized = false;


app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
    const password = req.body["password"];
    req.userIsAuthorized = (password === "ILoveProgramming");
    next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(req.userIsAuthorized) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
        res.send("<script>alert('Wrong password! You cannot access secrets.'); history.back();</script>");
    }
});


//The password is ILoveProgramming
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
