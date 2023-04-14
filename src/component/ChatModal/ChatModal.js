import "./chatmodal.scss";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

const ChatModal = ({ curMatch, setCurMatch }) => {
  const room = curMatch.roomId;
  console.log(room);
  useEffect(() => {
    socket.emit("join-room", room);
  }, []);

  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const cancelHandler = () => {
    setCurMatch(false);
  };

  const formSubmitHander = (e) => {
    e.preventDefault();

    socket.emit("send-message", input, room);
  };

  socket.on("connect", () => {
    setMessage(`You connected with id: ${socket.id}`);
  });

  socket.on("receive-message", (message) => {
    setMessage(message);
  });

  return (
    <div className="chat">
      <div className="chat__message-container">{message}</div>
      <form onSubmit={formSubmitHander}>
        <input
          className="chat__input"
          placeholder="Message"
          value={input}
          onChange={onChangeHandler}
        />
        <div className="chat__button-container">
          <button type="button" onClick={cancelHandler}>
            Back
          </button>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ChatModal;
