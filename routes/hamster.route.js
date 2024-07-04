const express = require("express");
const hamsterRouter = express.Router();
const Hamster = require("../models/hamster.model.js");
const {
  getHamsters,
  getHamster,
  postHamster,
  putHamster,
  deleteHamster,
} = require("../controllers/hamster.controller.js");

//hamsterRouter.use(logger); //middleware for all routes
hamsterRouter.get("/", getHamsters);
hamsterRouter.get("/:id", getHamster);
hamsterRouter.post("/", postHamster);
hamsterRouter.put("/:id", putHamster);
hamsterRouter.delete("/:id", deleteHamster);

module.exports = hamsterRouter;
