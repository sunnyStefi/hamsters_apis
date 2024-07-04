const express = require("express");
const mongoose = require("mongoose");
const Hamster = require("./models/hamster.model.js");
const hamsterRouter = require("./routes/hamster.route.js");
const app = express(); // contains middlewares
const PORT = 8080;

//middlewares: code that runs between request and response
app.use(logger); //custom middleware/logger. Order matters
app.use(express.json()); //apply middleware to parse json: every request will be parsed as json
app.use(express.urlencoded({ extended: true })); //apply middleware to parse urlencoded data
app.use("/api/hamsters", hamsterRouter);

//add password and collection name
mongoose
  .connect(
    "mongodb+srv://sunnyStefi:admin@cluster0.dnglynn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to database");
    //server runs on port 8080 after connection to database
    app.listen(PORT, () =>
      console.log(`app is alive on port http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });

/* 1. route /hamster: sets up an endpoint in express server
 * 2. handler function (callback): run when the route is requested
 * GET http://localhost:8080/hamster
 */
app.get("/api/test", logger, (req, res) => {
  res.status(200).send({ name: "Hamtaro", id: "002", animal: "🐹" }); // sent from node API
});

function logger(req, res, next) {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  next(); // call the next middleware
}
