/*
* Modelisation of the table mytable on the MongoDB 
 */

const mongoose = require("mongoose");

// Constructing a schema for the table mytable
const myTableSchema = new mongoose.Schema ({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    presence:{
        type:Boolean
    }
});

// Creation of the table
const myTable = mongoose.model("myTable", myTableSchema);

// Export the module
module.exports = myTable;