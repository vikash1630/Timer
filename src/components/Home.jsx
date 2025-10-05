// ...existing code...
import React from "react";
import "./local.css"
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Home() {
    return (
        <div>
            <Nav />
            {/* FIX: center container and limit width so borders look "perfect" */}
            <div className="m-6 flex justify-center">
                {/* FIX: replaced invalid 'border-s' with standard Tailwind border utilities.
                          use max-w-md so the two boxes share consistent width and look aligned */}
                <div className="w-full max-w-md space-y-4">
                    {/* FIX: replaced 'border-s-4' with 'border-l-4' (visible left accent) and added padding, rounded corners, bg, shadow */}
                    <div className="border-l-4  bg-slate-900 border-white p-4 rounded-md shadow-sm">
                        <Link className="block text-white cursor-pointer hover:opacity-80 text-center font-semibold" to="/stopwatch">STOP WATCH</Link>
                    </div>

                    {/* FIX: same changes for second box to ensure matching appearance */}
                    <div className="border-l-4  bg-slate-900 border-white p-4 rounded-md shadow-sm">
                        <Link className="block text-white cursor-pointer hover:opacity-80 text-center font-semibold" to="/pomodoro">POMO DORO TIMER</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
// ...existing code...