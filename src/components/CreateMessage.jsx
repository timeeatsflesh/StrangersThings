import React, {useState} from "react";
import { sendMessage } from "../api-adapter";
import { Link, useParams } from "react-router-dom";



function CreateMessage() {
    let [message, setMessage] = useState("");
    let { id } = useParams(); 
  
    async function createNewMessage( id, message ) {
      try {
        console.log("you have created a new message:", id,  message);
        const result = await sendMessage(id, message);
        setMessage('');
      } catch (error) {
        console.log(error);
      }
    }
        return (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                createNewMessage(id, message);
              }}
            >
              <label>
                Message:
                <input
                  name="message"
                  type="text"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                />
              </label>
              </form>
        )
                } 
            
export default CreateMessage;
