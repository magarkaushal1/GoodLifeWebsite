const express = require("express");
const { signup, login } = require("../controller/auth");
const { signup_validator, login_validator } = require("../middleware/auth");

const router = express.Router();

router.post("/admin/signup", signup_validator, signup);
router.post("/admin/login", login_validator, login);

module.exports = router;