import React, {useState} from "react";
import { sendMessage } from "../api-adapter";
import { Link } from "react-router-dom";



function CreateMessage() {
    let [message, setMessage] = useState("");
    
  
    async function createNewMessage(message) {
      try {
        console.log("you have created a new message", message);
        const result = await sendMessage(message);
        localStorage.setItem(result.data.token);
        setMessage('');
      } catch (error) {
        console.log(error);
      }
    }
        return (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                createNewMessage(message);
              }}
            >
              <label>
                Message:
                <input
                  name="message"
                  type="text"
                  value={setMessage}
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                />
              </label>
              </form>
        )
                } 
            
export default CreateMessage;
