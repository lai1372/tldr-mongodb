const express = require("express");
const app = express();
const run = require("./connection");
const cors = require("cors");
const mapToRoutes = require("./routes");

const port = 3000;

app.use(cors());

// ** mapping to routes
mapToRoutes(app);

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.listen(port, async () => {
  try {
    await run();
    console.log(`Listening on http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
});
