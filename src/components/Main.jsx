import React from "react";
import { Navbar } from "./";
import { AllPosts, Login } from "./"


const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <div>I am in main</div>
            <AllPosts />
            <Login />
        </div>
    )
}

export default Main