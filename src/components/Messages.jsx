import React, { useState, useEffect } from "react";
import { getMessages } from "../api-adapter";

const Messages = () => {
    const [Messages, setMessages] = useState([])

    const receiveMessages = async () => {
        try{
            const result = await getMessages();
            setMessages(result.data.messages)
            return result;
        } catch (error) {
            console.log(error);
        }
    }
        useEffect(() => {
            receiveMessages();
        }, [])
        return(
            <div>
                <h1>Messages</h1>
            </div>
        )
    }

export default Messages;