const express = require("express");
const router = express.Router();

const room_controller = require("../controllers/room_controller");

router.get("/", room_controller.index);
router.post("/", room_controller.create);

module.exports = router;
