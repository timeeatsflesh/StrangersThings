import React from "react";
import ReactDOM from "react-dom/client";
import { Main, AllPosts, Register, Login } from "./components";

import {
	Route,
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
		<Route path="/" element={<Main />} />
		<Route element={<AllPosts />} />
		<Route element={<Login />} />
		</>
		
	)
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
