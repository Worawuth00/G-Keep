const KeepMessage = require("../models/keepModel");
const mongoose = require("mongoose");

exports.getKeeps = async (req, res) => {
  try {
    const getKeeps = await KeepMessage.find();
    res.status(200).json(getKeeps);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createKeep = async (req, res) => {
  const newKeep = new KeepMessage(req.body);

  try {
    await newKeep.save();
    res.status(201).json(newKeep);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateKeep = async (req, res) => {
  const { id: _id } = req.params.id;
  const keep = req.body;
  const updateKeep = await KeepMessage.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateKeep);
};

exports.deleteKeep = async (req, res) => {
  await KeepMessage.findByIdAndRemove(req.params.id);
  res.json({ message: "Deleted successfully" });
};
