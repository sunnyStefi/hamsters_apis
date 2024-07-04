const mongoose = require("mongoose");

const hamsterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    id: {
      type: Number,
      required: [true, "id is required"],
      default: 0,
    },
  },
  { timestamps: true }
);

const Hamster = mongoose.model("Hamster", hamsterSchema); // on database it will be `hamsters`
module.exports = Hamster;
