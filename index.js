const express = require("express");
const app = express();
const runDB = require("./connection");
const routes = require("./routes");
const cors = require("cors");

const port = 3000;

app.use(routes);
app.use(cors());

app.listen(port, async () => {
  try {
    await runDB();
    console.log(`Listening on http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
});
