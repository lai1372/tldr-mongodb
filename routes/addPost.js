const express = require("express");
const Post = require("../model/Post");
const router = express.Router();

router.use(express.json());

router.post("/", (req, res) => {
  console.log(req.body);
  try {
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
    post.save(); // await
    res.status(201);
    res.send("POST has been added successfully");
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
