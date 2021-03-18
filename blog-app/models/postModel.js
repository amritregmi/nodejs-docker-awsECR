const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "campaign name is required"],
  },
  description: {
    type: String,
    required: [true, "description required"],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
