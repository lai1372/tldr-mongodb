const express = require("express");
const router = express.Router();
const Post = require("../model/Post");


router.get("/", async (req, res) => {
  try {
    //search for all posts
    const allPosts = await Post.find({})
    res.status(200).send(allPosts)
  } catch(err) {
    //posts not found
    res.status(404).send(err.message);
    console.error(err);
  }
});

module.exports = router;
