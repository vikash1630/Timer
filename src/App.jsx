import React from "react";
import './index.css'
import Nav from "./components/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rate from "./components/Rate";
import Home from "./components/Home";
import Stopwatch from "./components/Stopwatch";
import Pomodoro from "./components/Pomodoro";
import SignUp from "./components/SignUp";
import Login from "./components/login";
import Pomodorotimerstart from "./components/pomodorotimerstart";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/Rate",
            element: <Rate />
        },
        {
            path: "/stopwatch",
            element: <Stopwatch />
        },
        {
            path: "/Pomodoro",
            element: <Pomodoro />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/pomodorotimerstart",
            element: <Pomodorotimerstart />
        },
        
    ])


    return (
        <div>
            {/* <h1 className="font-extrabold bg-amber-700">Jai shree ram</h1> */}

            <RouterProvider router = {router} />
        </div>
    );
}

export default App;