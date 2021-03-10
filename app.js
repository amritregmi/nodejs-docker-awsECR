const express = require("express");
const path = require("path");
const morgan = require("morgan");

const postRouter = require("./routes/postRoute");

const app = express();

//set pug engine
app.set("view engine", "pug");

// load views template from veiws folder
app.set("views", path.join(__dirname, "views"));

// server static file
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));
app.use(
  express.json({
    limit: "10kb",
  })
);

// Route for campaign API
app.use("/posts", postRouter);

module.exports = app;
