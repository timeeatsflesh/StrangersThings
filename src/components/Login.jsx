import React, { useState, useEffect } from 'react';
import { sendUser } from '../api-adapter';
import { Link } from 'react-router-dom';
import { Status } from './'

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [response, setResponse] = useState({});

  async function sendLogin(username, password) {
    try {
      const result = await sendUser(username, password);
      setResponse(result);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    console.log(localStorage.token, "response here")
  }, [response.data.token]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendLogin(username, password);
      }}
    >
      <label>
        Username:
        <input
          name="username"
          type="text"
          value={username}
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
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </label>
      <button type="submit">Login</button>
      {/* <Link to="/">Go back</Link> */}

      <label>
        
      </label>
      <button type="submit">Logout</button>
      
    </form>
  );
}

export default Login;