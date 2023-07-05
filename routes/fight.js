const express = require("express");
const router = express.Router();

const fight_controller = require("../controllers/fight_controller");

router.post("/:id", fight_controller.play);

module.exports = router;
