const express = require("express");
const router = express.Router();
const Post = require("../model/Post");

router.put("/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    // throws if the postId does not exist
    if (!postId) return res.status(400).send("Post id required.");

    // creating the new Post
    const newPost = {
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
    };

    // checking if the post exists and delete
    await Post.findByIdAndUpdate(postId, newPost);

    // success status
    return res.status(200).send(`${postId} is successfully updated.`);
  } catch (err) {
    res.status(404).send(err.message);
    console.error(err);
  }
});

module.exports = router;
