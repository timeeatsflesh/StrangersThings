import React, { useState } from 'react'
import { sendUser } from '../api-adapter';
import { Link } from 'react-router-dom';

function returningUser() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [response, setResponse] = useState({});
}
    
async function sendlogin(username, password) {
    try {
        // console.log("you have posted a new article", title, article);
        const result = await sendUser(username, password);
        setResponse(result);
        setUsername('');
        setPassword('');
      } catch (error) {
        console.log(error);
      }
    

useEffect(() => {
  localStorage.setItem(response.username, response.password);
}, [response])


    return (
        <form
        onSubmit={(event) => {
          event.preventDefault();
          sendArticle(newTitle, newArticle);
        }}
      >
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={setUsername}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="text"
            value={newArticle}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
       <Link to="/">Go back</Link>
      </form>
    );
}   
    
   
    
export default Login      