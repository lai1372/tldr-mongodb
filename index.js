const express = require("express");
const app = express();
const runDB = require("./connection");

const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, async () => {
  try {
    await runDB();
    console.log(`Listening on http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
});
