import express from "express";

const app = express();
const PORT = 3000;

const day = new Date("Jan 19, 2025 01:15:00").getDay();

let dayType= "a weekday";
let advice= "it's time to work hard!";

if(day === 0 || day === 6) {
    dayType = "the weekend";
    advice= "it's time to enjoy!";
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType,
        advice,
    });
});


//Starting the server with port 3000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});