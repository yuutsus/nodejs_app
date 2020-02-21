/*
* Managing the CRUD operations
 */

const myTable = require("../db/db.mytable.model");

// CRUD Operations
const getALL = async () => {
    recordset = await myTable.find().catch((err) => {
        console.log(`Database ERROR! ${err}`);
    });
    return recordset;
};

const getOne = async (id) => {
    recordset = await myTable.findOne(id).catch((err) => {
        console.log(`Database ERROR! ${err}`);
    });
    return recordset;
};

const insert = async (data) => {
    await data.save()
              .then(() => {
                  console.log(`User ${name} added.`);
                  return "Success!"
              })
              .catch((err) => {
                  console.log(`Database ERROR! ${err}`);
                  return "Error!"
              });
};