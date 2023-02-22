import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div id="navbar">
      <h2> I am navbar</h2>
      <div id="Login/Register">
      <Link to="/">Home</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/register">Sign Up/</Link>
      <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;