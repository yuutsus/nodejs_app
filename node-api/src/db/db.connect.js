/*
* Connection to the database
 */

// Declaration of the configuration module to access the database
const config = require("./db.config");

// Declaration of mongoose to connect to MongoDB
const mongo = require("mongoose");

// TODO Define later
mongo.Promise = global.Promise;

// MongoDB connection
const connectDB = () => {
  return mongo.connect(config.url, {
      useNewUrlParser:true,
      useUnifiedTopology:true
  });
};

module.exports = connectDB;