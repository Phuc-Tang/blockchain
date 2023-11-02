const express = require("express");
const db = require("./src/config/connection")
const PORT = 5000;

const app = express();

db.connect();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Connect to server is successfully with PORT: ${PORT}`);
});