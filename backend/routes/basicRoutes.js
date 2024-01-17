const express = require("express");

const router = express.Router();
const {
  getAllData,
  getSingleData,
  createData,
  updateData,
  deleteData,
} = require("../controllers/basicControllers");

// GET ALL data
router.get("/", getAllData);

// GET SINGLE data
router.get("/:id", getSingleData);

// CREATE data
router.post("/", createData);

// UPDATE data
router.patch("/:id", updateData);

// DELETE data
router.delete("/:id", deleteData);

module.exports = router;
