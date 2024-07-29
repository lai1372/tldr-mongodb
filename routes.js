const addPostRoute = require("./routes/addPost");
const updatePostRoute = require("./routes/updatePost");
const deletePostRoute = require("./routes/deletePost");
const getAllPostsRoute = require("./routes/getPosts");
const getPostRoute = require("./routes/getPostById");

const mapToRoutes = (app) => {
  app.use("/api/posts", addPostRoute);
  app.use("/api/posts", updatePostRoute);
  app.use("/api/posts", deletePostRoute);
  app.use("/api/posts", getAllPostsRoute);
  app.use("/api/posts", getPostRoute);
};

module.exports = mapToRoutes;
