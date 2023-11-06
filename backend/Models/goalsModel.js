const mongoose = require("mongoose");

const goalsSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("Goal", goalsSchema);

module.exports = model;
