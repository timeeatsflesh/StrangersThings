import React, { useState, useEffect } from 'react';
import { sendUser } from '../api-adapter';
import { Link } from 'react-router-dom';

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
    localStorage.setItem(response.username, response.password);
  }, [response.username, response.password]);

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
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </label>
      <button type="submit">Login</button>
      {/* <Link to="/">Go back</Link> */}
    </form>
  );
}

export default Login;