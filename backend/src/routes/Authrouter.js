const router = require("express").Router();
const { registerValidation, loginValidation } = require("../middleware/authvalidation");
const { register, login } = require("../controllers/authcontroller");

router.post("/login", loginValidation, login);
router.post("/register", registerValidation, register);

module.exports = router;