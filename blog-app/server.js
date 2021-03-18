const app = require("./app");
const mongoose = require("mongoose");

const dbConfig = require("./db");
const PORT = 3000;
const HOST = "0.0.0.0";
// connect to mongo atlas - CLOUD MONGO DB
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log("connected to database: MONGODB ATLAS");
  })
  .catch((err) => {
    console.log(err, "Refused: database connection");
  });

app.listen(PORT, HOST, () => {
  console.log(`App listening at http://${HOST}:${PORT}`);
});
