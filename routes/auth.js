const express = require("express");

const auth_controller = require("../controllers/auth_controller");

const router = express.Router();

router.get("/login", auth_controller.login);
router.post("/login", auth_controller.doLogin);
router.get("/unauthorized", auth_controller.unauthorize);
router.get("/register", auth_controller.register);
router.post("/register", auth_controller.doRegister);

module.exports = router;
