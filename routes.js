const addPostRoute = require("./routes/addPost");
const updatePostRoute = require("./routes/updatePost");
const deletePostRoute = require("./routes/deletePost");

const mapToRoutes = (app) => {
  app.use("/api/posts", addPostRoute);
  app.use("/api/posts", updatePostRoute);
  app.use("/api/posts", deletePostRoute);
};

module.exports = mapToRoutes;
