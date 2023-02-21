import React from "react";
import { Navbar } from "./";
import { AllPosts, Register } from "./"

const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <div>I am in main</div>
            <Register />
            <AllPosts />
        </div>
    )
}

export default Main