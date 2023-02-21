import React from "react";
import { Navbar } from "./";
import { AllPosts, Login } from "./"
import Register from "./Register";


const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <div>I am in main</div>
            <AllPosts />
            <Login />
            <Register />
        </div>
    )
}

export default Main