import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <nav className="flex bg-slate-800 p-5 px-10 m-3 rounded-md text-shadow-white text-2xl justify-between">
                <Link to="/">Home</Link>
                <div className="flex gap-10">
                    <Link to = "/signup" >Sign Up</Link>
                    <Link to="/Rate">Rate Us</Link>
                </div>
            </nav>
        </div>
    )
}

export default Login