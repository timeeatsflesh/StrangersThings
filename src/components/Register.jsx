import React, { useState, useEffect } from 'react';
import { newUser } from '../api-adapter';
import { Link } from 'react-router-dom';

function Register() {
    let [newUsername, setNewUsername] = useState("");
    let [newPassword, setNewPassword] = useState("");
    let [response, setResponse] = useState({});
  
    async function sendRegister(newUsername, newPassword) {
      try {
        const result = await newUser(newUsername, newPassword);
        setResponse(result);
        setNewUsername('');
        setNewPassword('');
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      localStorage.setItem(response.newUsername, response.newPassword);
    }, [response.newUsername, response.newPassword]);
  
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendRegister(newUsername, newPassword);
        }}
      >
        <label>
          Username:
          <input
            name="newUsername"
            type="text"
            value={newUsername}
            onChange={(event) => {
              setNewUsername(event.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            name="newPassword"
            type="text"
            value={newPassword}
            onChange={(event) => {
              setNewPassword(event.target.value);
            }}
          />
        </label>
        <button type="submit">Register</button>
        {/* <Link to="/">Go back</Link> */}
      </form>
    );
  }
  
  export default Register;

