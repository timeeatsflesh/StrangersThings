import React from "react";
import ReactDOM from "react-dom/client";
import { Main, AllPosts, Register } from "./components";

import {
	Route,
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Main />}>
            <Route element={<Register/>}/>
			<Route element={<AllPosts />} />
		</Route>
	)
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
