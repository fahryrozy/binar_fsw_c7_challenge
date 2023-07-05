const models = require("../models");

module.exports = {
  index: async (req, res) => {
    return res.json(req.body);
  },
  create: async (req, res) => {
    const { room_name } = req.body;
    const isRoomExist = await models.Room.findOne({
      where: {
        name: room_name,
      },
    });
    if (isRoomExist)
      return res
        .status(400)
        .json({ message: "Room is already exist", room_id: isRoomExist.id });

    const isRoomCreated = await models.Room.create({
      name: room_name,
    });
    if (isRoomCreated)
      return res.status(200).json({
        message: "Room has been created successfully",
        room_id: isRoomCreated.id,
      });
  },
};
