import React, { useState, useEffect } from "react";
import { getMessages } from "../api-adapter";

const Messages = () => {
    const [Messages, setMessages] = useState('')
    const [fromUser, setFromUser] = useState('')
    const receiveMessages = async () => {
        try{
            const result = await getMessages();
            console.log(result.data.username)
            localStorage.setItem(result.data.username);
            setMessages(result.data.messages)
            setFromUser(result.data.messages[0].fromUser.username)
            return result;
        } catch (error) {
            console.log(error);
        }
    }
        useEffect(() => {
            receiveMessages();
        }, [])
        
        return (
            <div>
                {/* {
                    
        Messages.length ? Messages.map ((message, idx) => {
        return(
            
            <div>
                <h1>Messages</h1>
                <h2>{`From: ${fromUser}`}</h2>
                <h2>{`Message: ${Messages}`}</h2>
            </div>
        )
        }) : <h1>No Messages</h1>
        } */}
        </div>
        )
        }

    

export default Messages;