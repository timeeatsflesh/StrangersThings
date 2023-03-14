import React, { useState, useEffect } from "react";
import { getMessages } from "../api-adapter";
import { Link } from "react-router-dom";

const Messages = () => {
  const [Messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");
  const [posts, setPosts] = useState([])

  const receiveMessages = async () => {
    try {
      const result = await getMessages();
      setMessages(result.data.messages);
      setUserName(result.data.username);
      setPosts(result.data.posts)
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    receiveMessages();
  }, []);

const activePosts = posts.length ? posts.filter((post)=>{return post.active === true}): []
console.log(activePosts, " activePosts")

const activePostsMessages = activePosts.map((message)=>{
  return message.messages
})
console.log(activePostsMessages, " activePostsMessages")

const message = activePostsMessages.map((message, idx)=>{
  return (
    <div key ={`idx: ${idx}`}>
      <h1>{`${message[0].fromUser.username}`}</h1>
      <p>{`${message[0].content}`}</p>
    </div>
  )
})
console.log(message," message")

return(
  <div>{message}</div>
)
}

export default Messages
