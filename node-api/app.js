/**
 * NodeJS API & MongoDB
 */

// Declaration of express to create an APP
const express = require("express");
const app = express();

// Declaration of the access to the database
const connection = require("./src/db/db.connect");

// Declaration of a HTTP request parser
const parser = require("body-parser");

// Declaring the working port
const port = 5000;

// Declaring the API's port
app.listen(port, () => {
    console.log(`NodeJS API listening on port: ${port}`);
    // Placeholder for DB connection
    connection()
    .then(() => {console.log("Connected to MongoDB!")})
    .catch((err) => {
        console.log(`Oooops! Something went wrong... ${err}`);
    });
});

// Declaration of a middleware to parse the http requests
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

// Declaration of the API's root
app.get('/', (req, res) => {
  datas = {
      "name": "Simple NodeJS API"
  }
  res.json(datas);
});

// GET : Reading the table
app.get("/api/myTable", (req, res) => {
    // TODO Placeholder code
});

app.get("/api/mytable:id", (req, res) => {
   // TODO Placeholder code
});

// POST : Creation of a new element
app.post("/api/myTable/insert", (req, res) => {
    // TODO Placeholder code
});

// PUT : Update of an element
app.put("/api/myTable/update:id", (req, res) => {
    // TODO Placeholder code
});

// DELETE : Deletion of an element
app.delete("/api/myTable/delete:id", (req, res) => {
    // TODO Placeholder code
});