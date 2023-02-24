import React, { useState, useEffect } from "react";
import { getMessages } from "../api-adapter";
import { Link } from "react-router-dom";

const Messages = () => {
  const [Messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");

  function Logout() {
    localStorage.removeItem("username");
  }

  const receiveMessages = async () => {
    try {
      const result = await getMessages();
      localStorage.setItem("username", result.data.username);
      setMessages(result.data.messages);
      setUserName(result.data.username);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    receiveMessages();
  }, []);

  console.log(Messages, username);

  const messagesSentToMe = Messages?.filter((message) => {
    return message.fromUser.username !== username;
  });

  return (
    <div id="all-messages">
      <h1>All Messages</h1>
      {Messages.length ? (
        Messages.map((message, idx) => {
          console.log(message.messages);
          return <div key={idx}></div>;
        })
      ) : (
        <h1>No Messages</h1>
      )}
      <button onClick={() => Logout()}>Logout</button>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Messages;
