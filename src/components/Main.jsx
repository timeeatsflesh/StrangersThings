import React from "react";
import { Navbar, SearchBar } from "./";
import { Outlet } from "react-router-dom";

const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <SearchBar />
            <Outlet />
        </div>
    )
}

export default Main