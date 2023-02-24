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

  const messagesSentToMe =Messages.length ? Messages?.filter((message) => {
    return message.fromUser.username !== username;
  })
  : null
  
  console.log(messagesSentToMe)
  messagesSentToMe.length ? messagesSentToMe.map((message, idx) =>{
     return (
      <div key={`this message idx is: ${idx}`}>
          <h2>{message.post.title}</h2>
          <h3>{message.fromUser.username}</h3>
          <p>{message.content}</p>
          {/* <Link to={`/create-message/${post._id}`}><button>Ask Seller</button></Link> */}
      </div>
      )
  }) : null

  return (
    <div id="all-messages">
      <h1>All Messages</h1>
      {
            
            
            }
        
 </div>
  )}


export default Messages
