import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div id="navbar">
      <h2> Stranger's Things</h2>
      <div id="linkBox">
        <Link to="/"><button>Home</button></Link>
        <Link to="/profile"><button>profile</button></Link>
        <Link to="/register"><button>Sign Up</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;