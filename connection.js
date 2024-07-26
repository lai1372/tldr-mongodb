const mongoose = require("mongoose");
require("dotenv").config();

const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@tldrdb.nlq36ds.mongodb.net/?retryWrites=true&w=majority&appName=TLDRDB`;

async function runDB() {
  try {
    await mongoose.connect(url, { dbName: process.env.DBNAME });
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err.stack);
  }
}

module.exports = runDB;