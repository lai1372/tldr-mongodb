const addPostRoute = require("./routes/addPost");

const mapToRoutes = (app) => {
  app.use("/api/posts", addPostRoute);
};

module.exports = mapToRoutes;
