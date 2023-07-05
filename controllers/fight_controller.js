const fs = require("fs");

const models = require("../models");
const gameRules = require("../data/gamesRules");

module.exports = {
  play: async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    const { user_input } = req.body;
    const newGame = { room_id: id, username: user.username, user_input };

    return res.json({
      message: "Not Implemented Yet",
      reason: "Waktu nya ga sempat hehehe",
      input: newGame,
    });
  },
};
