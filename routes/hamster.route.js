const express = require("express");
const hamsterRouter = express.Router(); // independent miniapp
const Hamster = require("../models/hamster.model.js");

const {
  getHamsters,
  getHamster,
  postHamster,
  putHamster,
  deleteHamster,
  getNew,
} = require("../controllers/hamster.controller.js");

//hamsterRouter.use(logger); //middleware for all routes
hamsterRouter.route("/").get(getHamsters).post(postHamster);
hamsterRouter
  .route("/:id")
  .get(getHamster)
  .put(putHamster)
  .delete(deleteHamster);
hamsterRouter.get("/new", getNew);

hamsterRouter.param("id", (req, res, next, id) => {
  console.log("params id: ", id);
  next();
});
module.exports = hamsterRouter;
