import React from "react";
import { Navbar } from "./";
import { AllPosts } from "./"

const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <div>I am in main</div>
            <AllPosts />
        </div>
    )
}

export default Main