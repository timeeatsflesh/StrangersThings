import react, { useState, useEffect } from "react";
import { getMessages } from "../api-adapter";

const Messages = () => {
    const [Messages, setMessages] = useState("")

    const receiveMessages = async () => {
        try{
            const result = await getMessages();
            console.log(result)
            setMessages(result)
            return result;
        } catch (error) {
            console.log(error);
        }
    }
        useEffect(() => {
            receiveMessages();
        }, [])
    }

export default Messages;