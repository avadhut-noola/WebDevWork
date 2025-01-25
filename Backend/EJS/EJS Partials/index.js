import express from "express";

const app = express();
const port = 3000;

// Using static files from public folder:
app.use(express.static("public"));

// Step 1: Render the home page "/" index.ejs
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Step 3: Add the routes to handle the render of the about and contact pages.
app.get("/about", (req,res) => {
  res.render("about.ejs");
});

app.get("/contact", (req,res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
