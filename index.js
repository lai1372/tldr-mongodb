const express = require("express");
const app = express();
const run = require("./connection");
const routes = require("./routes");
const cors = require("cors");
const Post = require("./model/Post");

const port = 3000;

app.use(routes);
app.use(cors());
app.use(express.json());

app.listen(port, async () => {
  try {
    await run();
    console.log(`Listening on http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.post("/", (req, res) => {
  console.log(req.body);
  try{
    const post = new Post({
      id: req.body.id,
      title: req.body.title,
      body: req.body.body,
      author_name: req.body.author_name,
      channel_name: req.body.channel_name,
      post_link: req.body.post_link,
      importance_level: req.body.importance_level,
      status: req.body.status,
      video_link: req.body.video_link,
      images: req.body.images,
    });
    post.save();
    res.status(201)
    res.send("POST has been added successfully");
  } catch(err){
     res.send(err)
  }
});