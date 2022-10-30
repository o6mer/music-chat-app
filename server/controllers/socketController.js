const {
  sendMessageDB,
  joinRoomDB,
  deleteMessageDB,
  leaveRoomDB,
} = require("./dbController");
const uniqid = require("uniqid");

const onSocketConection = (socket, io) => {
  socket.on("sendMsg", onSendMessage);
  socket.on("joinRoom", onJoinRoom);
  socket.on("userDisconnected", onUserDisconnected);
  socket.on("delMsg", onDeleteMessage);

  async function onUserDisconnected(userId, roomId) {
    socket.to(roomId).emit("userLeftRoom", userId);
    const updatedRoom = await leaveRoomDB(userId, roomId);
    io.emit("userChangedRoom", null, updatedRoom);
  }

  async function onSendMessage(msg, room, callback) {
    msg.msgId = uniqid();

    msg = await sendMessageDB(msg, room);

    if (room === "") socket.emit("receiveMsg", msg);
    else {
      socket.to(room).emit("receiveMsg", msg);
    }
    callback(msg);
  }

  async function onDeleteMessage(roomId, msgId, userId, msgWriterId, callback) {
    if (userId.toString() === msgWriterId.toString()) {
      deleteMessageDB(roomId, msgId); // deleting the message on the db
      socket.broadcast.emit("removeMsg", msgId);
      callback("message deleted!");
    } else callback("message deletion denied!");
  }

  const rooms = [];
  async function onJoinRoom(roomId, userId, callback) {
    rooms.forEach((room) => {
      socket.to(room).emit("userLeftRoom", userId);
      socket.leave(room);
      rooms.pop();
    });

    try {
      if (!roomId || !userId) return;

      const { newRoom, currentRoom } = await joinRoomDB(userId, roomId);

      socket.join(roomId);
      socket.to(roomId).emit("userJoinedRoom", userId, newRoom);
      io.emit("userChangedRoom", newRoom, currentRoom);
      callback(newRoom);
      rooms.push(roomId);
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = { onSocketConection };
