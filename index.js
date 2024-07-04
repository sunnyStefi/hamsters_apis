const express = require("express");
const mongoose = require("mongoose");
const Hamster = require("./models/hamster.model.js");
const app = express(); // contains middlewares
const PORT = 8080;

app.use(express.json()); //apply middleware to parse json: every request will be parsed as json
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
app.get("/hamster", (req, res) => {
  res.status(200).send({ name: "Hamtaro", id: "002", animal: "🐹" }); // sent from node API
});

//http://localhost:8080/hamster/1 with body {"name": "Hamtaro"}
app.post("/api/hamsters/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(400).send({ error: "Name is required" });
  }

  //save to database
  try {
    const hamster = new Hamster({ name, id });
    hamster.save();
  } catch (err) {
    res.status(500).send({ error: error.message });
  }
  res.status(200).send({ name: `${name}`, id: `${id}`, animal: "🐹" });
});


//https://youtu.be/_7UQPve99r4?t=2480
