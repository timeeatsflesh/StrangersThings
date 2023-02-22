import React from "react";
import { Navbar } from "./";
import { AllPosts, Login } from "./"
import Register from "./Register";
import { Outlet } from "react-router-dom";

const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <Outlet />
            {/* <Login /> */}
            {/* <AllPosts /> */}
            {/* <Register /> */}
        </div>
    )
}

export default Main