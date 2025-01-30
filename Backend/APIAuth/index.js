import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
// String will show empty after commit due to privacy reasons,
// fill up strings as per your needs, code will work same with your credentials. 
const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  
  //Sending the data  back to the ejs file as "content"
  try {
    const response = await axios.get(`${API_URL}/random`);
    
    //JSON.stringify to turn the JS object from axios into a string.
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error.message);
  }

});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specifying we only want the secrets from page 2
  //Using axios for performing basic auth: https://stackoverflow.com/a/74632908
  try {
    const response = await axios.get(`${API_URL}/all?page=2`, {
      auth: {
        username: `${yourUsername}`,
        password: `${yourPassword}`,
      },
    });

    //JSON.stringify to turn the JS object from axios into a string.
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error.message);
  }

});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Hitting up the /filter endpoint
  //Filtering request with parameter minimum score of 5 or greater

  //Passing parameters with axios get request
  try {
    const response = await axios.get(`${API_URL}/filter`, {
      params: {
        score: "5",
        apiKey: `${yourAPIKey}`,
      },
    });

    //JSON.stringify to turn the JS object from axios into a string.
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error.message);
  }
  
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //Get the secret with id of 42
  
  //Using axios to do bearer token auth: https://stackoverflow.com/a/52645402
  try {
    const response = await axios.get(`${API_URL}/secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      },
    });
  
    //JSON.stringify to turn the JS object from axios into a string.
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
