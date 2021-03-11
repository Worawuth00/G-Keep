const mongoose = require("mongoose");

const keepSchema = mongoose.Schema({
  title: String,
  message: String,
  tag: String,
  file: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const KeepMessage = mongoose.model("KeepMessage", keepSchema);

module.exports = KeepMessage;
