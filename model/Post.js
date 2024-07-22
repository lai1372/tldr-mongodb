const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  id: { type: String, required: true },
  image_url: { type: String, required: true }
});

const postSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  author_name: { type: String, required: true },
  channel_name: { type: String, required: true },
  post_link: { type: String, required: true },
  importance_level: { type: String, required: true },
  status: { type: String, required: true },
  video_link: { type: String, required: true },
  images: [imageSchema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
