import React from "react";
import ReactDOM from "react-dom/client";
import { Main, AllPosts, } from "./components";

import {
	Route,
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Main />}>
			<Route element={<AllPosts />} />
			<Route element={<Login />} />
			<Route element={<Register />} />
		</Route>
	)
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
