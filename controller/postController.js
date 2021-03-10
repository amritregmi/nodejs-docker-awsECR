const Post = require("../models/postModel");

// gets all post
exports.getAllPost = async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).render("base", { posts });
};

// create a post
exports.createPost = async (req, res, next) => {
  const post = await Post.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      post,
    },
  });
};

// delete post
exports.deletePost = async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id);

  if (!post) {
    console.log("No post");
  }
  res.status(200).json({
    status: "success",
  });
};
