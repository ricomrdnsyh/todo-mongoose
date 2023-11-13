const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./config/db");
const allRoutes = require("./routes");

db.then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on port : " + PORT);
});
