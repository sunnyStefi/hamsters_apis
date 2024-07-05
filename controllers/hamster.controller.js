const Hamster = require("../models/hamster.model");

const getNew = async (req, res) => {
  res.render("/meals/new");
};
const getHamsters = async (req, res) => {
  try {
    const hamsters = await Hamster.find();
    res.status(200).send(hamsters);
  } catch (err) {
    res.status(500).send({ error: "" });
  }
};

const getHamster = async (req, res) => {
  try {
    const hamster = await Hamster.findById(req.params.id);
    if (!hamster) {
      return res.status(404).send({ message: "Hamster not found" });
    }
    res.status(200).send(hamster);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const postHamster = async (req, res) => {
  //save to database
  try {
    const hamster = await Hamster.create(req.body);
    res.status(200).send(hamster);
  } catch (err) {
    res.status(500).send({ error: error.message });
  }
};

const putHamster = async (req, res) => {
  try {
    const id = req.params.id;
    const hamster = await Hamster.findByIdAndUpdate(id, req.body);
    if (!hamster) {
      return res.status(404).send({ message: "Hamster not found" });
    }
    const updatedHamster = await Hamster.findById(id);
    res.status(200).send(updatedHamster); // better retrieving again from db
  } catch (err) {
    res.status(500).send({ error: error.message });
  }
};

const deleteHamster = async (req, res) => {
  try {
    const id = req.params.id;
    const hamster = await Hamster.findByIdAndDelete(id);
    if (!hamster) {
      return res.status(404).send({ message: "Hamster not found" });
    }
    res.status(200).send(hamster);
  } catch (err) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getHamsters,
  getHamster,
  postHamster,
  putHamster,
  deleteHamster,
  getNew,
};
