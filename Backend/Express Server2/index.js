import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World, My First Express Server Application!")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
})