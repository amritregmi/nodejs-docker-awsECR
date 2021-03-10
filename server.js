const app = require("./app");
const mongoose = require("mongoose");

// connect to mongodb localhost
const DB = "mongodb://localhost:27017/blog";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((conn) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("Refused: database connection");
  });

app.listen(3000, () => {
  console.log("server running on port 3000");
});
