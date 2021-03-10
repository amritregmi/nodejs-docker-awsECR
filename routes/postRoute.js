const express = require("express");

const postController = require("../controller/postController");

const router = express.Router();

router.route("/").get(postController.getAllPost);

router.route("/").post(postController.createPost);

router.route("/:id").delete(postController.deletePost);

module.exports = router;
