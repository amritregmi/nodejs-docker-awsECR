const ApplicationError = require("../utils/applicationError");

module.exports = (err, req, res, next) => {
  return res.status(err.statusCode).render("error", {
    title: "Sorry, an error has occured, Requested page not found!",
    messge: err.message,
  });
};
