const express = require("express");
const path = require("path");
const morgan = require("morgan");

const globalErrorHandler = require("./controller/errorController");
const postRouter = require("./routes/postRoute");

const app = express();

const ApplicationError = require("./utils/applicationError");

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

//other url
app.all("*", (req, res, next) => {
  const err = new ApplicationError(`Can't find url on this server`, 404);
  next(err);
});

app.use(globalErrorHandler);

module.exports = app;
