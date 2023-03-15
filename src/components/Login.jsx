import React, { useState } from 'react';
import { sendUser } from '../api-adapter';
import { Link, useNavigate} from 'react-router-dom';

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const token = localStorage.getItem("token")
  let navigate = useNavigate();
  
  function Logout() {
    localStorage.setItem("token", "testToken")
    localStorage.removeItem("username")
  }

  async function sendLogin(username, password) {
    try {
      const result = await sendUser(username, password);
      localStorage.setItem("token", result)
      setUsername('');
      setPassword('');
      if(!result){
        window.alert("username/password is wrong");
        return false
      }else{
        navigate("/")
        window.alert("you are signed in!");
      }
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
      <label>
        <button type="submit">Login</button>
      </label>
      <button onClick={() => Logout()}>Logout</button>
      <Link to="/">Go back</Link>
    </form>
  );
}
export default Login;