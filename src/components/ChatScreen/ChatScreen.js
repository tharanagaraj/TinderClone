import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState([]);
  const [messages, setMessages] = useState([
    {
      name: "McConn",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Matthew_McConaughey_2011.jpg",
      message: "What up",
    },
    {
      name: "McConn",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Matthew_McConaughey_2011.jpg",
      message: "Let's get lunch",
    },
    {
      name: "McConn",
      image: "",
      message: "And some dessert after",
    },
    {
      message: "Sounds sweet",
    },
  ]);

  const handleSend = (e) => {
    //prevents refresh on return
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <h2> ChatScreen </h2>
      <p className="chatScreen__timeStamp">
        {" "}
        YOU MATCHED WITH McCONN 3 HOURS AGO{" "}
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text"> {message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser"> {message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type message here"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
