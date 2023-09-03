const express = require("express");
const { login } = require("../controllers/auth");

const router = express.Router();

router.use("/login", login);

module.exports = router;
