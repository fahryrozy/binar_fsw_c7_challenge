const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const gameRouter = require("./game");
const userRouter = require("./user");
const roomRouter = require("./room");
const fightRouter = require("./fight");
const { JWTMiddleware } = require("../middlewares/JWTMiddleware");

router.get("/", (req, res, next) => {
  return res.render("index");
});
router.use("/auth", authRouter);
router.use("/play", JWTMiddleware, gameRouter);
router.use("/user", JWTMiddleware, userRouter);
router.use("/create-room", JWTMiddleware, roomRouter);
router.use("/fight", JWTMiddleware, fightRouter);

module.exports = router;
