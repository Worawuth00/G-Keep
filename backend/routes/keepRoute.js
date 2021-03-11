const express = require("express");
const router = express.Router();
const {
  getKeeps,
  createKeep,
  updateKeep,
  deleteKeep,
} = require("../controllers/keepController");

router.get("/", getKeeps);
router.post("/", createKeep);
router.patch("/:id", updateKeep);
router.delete("/:id", deleteKeep);

module.exports = router;
