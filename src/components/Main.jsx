import React from "react";
import { Navbar } from "./";
import { AllPosts } from "./"

const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <AllPosts />
        </div>
    )
}

export default Main