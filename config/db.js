require("dotenv").config();
const mongoose = require("mongoose");

const db_url = process.env.DB_URL || "mongodb:localhost/my_database";

const db = mongoose.connect(db_url);

module.exports = db;
