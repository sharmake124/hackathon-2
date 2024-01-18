const express = require("express");

const router = express.Router();

const { getLogin, createUser } = require("../controllers/loginController");

router.post("/login", getLogin);
// router.post("/user", createUser);

module.exports = router;
