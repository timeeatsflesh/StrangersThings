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
  function checkForToken(){
      const routeChange = () =>{ 
        let path = `http://localhost:3000`; 
        navigate(path);
      }
      if(token.length <= 9){
        routeChange()
      }
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
        navigate("/");
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