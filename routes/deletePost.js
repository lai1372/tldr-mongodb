const express = require("express");
const router = express.Router();
const Post = require("../model/Post");

router.delete("/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    // throws if the postId does not exist
    if (!postId) return res.status(400).send("Post id required.");

    // checking if the post exists and delete
    await Post.findOneAndDelete({ id: postId });

    // success status
    return res.status(200).send(`${postId} is successfully deleted.`);
  } catch (err) {
    res.status(404).send(err.message);
    console.error(err);
  }
});

module.exports = router;
