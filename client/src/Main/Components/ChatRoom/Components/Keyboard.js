import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
// import { TextField } from "@mui/material/TextField";
// import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Keyboard = (props) => {
  const { sendMsg, roomId, postMsg, deleteAllMessages } = props;
  const [msg, setMsg] = useState("");

  function typing(event) {
    setMsg(event.target.value);
  }

  return (
    <div className="mt-auto">
      <div className="">
        <form
          action=""
          className="flex gap-x-1"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            postMsg(msg);
            setMsg("");
          }}
        >
          <div className="w-full mt-1">
            <TextField
              type="text"
              className="w-full"
              name="message"
              placeholder="Write a message"
              value={msg}
              onChange={typing}
            />
          </div>
          <IconButton type="submit">
            <SendIcon color="primary" />
          </IconButton>
          <IconButton onClick={deleteAllMessages}>
            <DeleteForeverIcon color="primary" />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Keyboard;
