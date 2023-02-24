import React, { useState, useEffect } from "react";
import { getMessages } from "../api-adapter";
import { Link } from "react-router-dom";

const Messages = () => {
  const [Messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");

  // let messagesSentToMe = ""

  const receiveMessages = async () => {
    try {
      const result = await getMessages();
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
  const messagesSentToMe = Messages.length ? Messages?.filter((message) => {
  return message.fromUser.username !== username;
  }) : []

    const mapMessagesSentToMe = messagesSentToMe.length ? messagesSentToMe.map((message, idx) =>{
      return (
      <div key={`this message idx is: ${idx}`}>
          <h2>{`Post: ${message.post.title}`}</h2>
          <h3>{`User: ${message.fromUser.username}`}</h3>
          <p>{`Message: ${message.content}`}</p>
      </div>
      )
  }) : null

  return (
  <div>{mapMessagesSentToMe}</div>
  )
  }

export default Messages
