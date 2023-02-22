import React, { useState } from 'react';
import { sendUser } from '../api-adapter';
import { Link } from 'react-router-dom';
import { Status } from './'

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function Logout() {
    localStorage.removeItem(token)
  }

  async function sendLogin(username, password) {
    try {
      const result = await sendUser(username, password);
      localStorage.setItem("token", result)
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  }

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
      <label>
        
      </label>
      <button onClick={() => Logout()}>Logout</button>
      <Link to="/">Go back</Link>
    </form>
  );
}

export default Login;