const express = require("express");
const router = express.Router();
const Post = require("../model/Post");

router.get("/:id", async (req, res) => {
  try {
    //save id
    const postId = req.params.id;
    //checks id has been passed
    if (!postId) return res.status(400).send("Post id required!");
    //search for all posts
    const post = await Post.findOne({ id: postId });
    res.status(200).send(post);
  } catch (err) {
    //post not found
    res.status(404).send(err.message);
    console.error(err);
  }
});

module.exports = router;
