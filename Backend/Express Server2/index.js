import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World, My First Express Server Application!")
})

// Understanding ENDPOINTS
app.get("/about", (req, res) => {
    res.send("Hello World, You're on the <em>about</em> ENDPOINT of Express server!")
})

app.get("/contact", (req, res) => {
    res.send("Hello World, You're on the <em>contact</em> ENDPOINT of Express server!")
})

//Starting the server with port 3000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
})