import React, { useState } from "react";
import "./local.css";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";


function Pomodoro() {

    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        // send data to another page
        navigate("/pomodorotimerstart", {
            state: {
                selection1: option1,
                selection2: option2,
            },
        });
    };




    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
            {/* Nav */}
            <div className="fixed top-0 left-0 w-full z-20">
                <Nav />
            </div>

            {/* Page Content */}
            <div className="flex-grow flex flex-col items-center justify-center mt-24">
                <div className="bg-slate-800 shadow-xl rounded-2xl p-10 flex flex-col items-center">
                    <h1 className="text-3xl font-semibold mb-6 text-orange-400 tracking-wide">
                        Pomodoro Timer
                    </h1>

                    <select value={option1} onChange={(e) => setOption1(e.target.value)} 
                        name=""
                        id=""
                        className="w-40 text-lg bg-slate-700 text-orange-300 font-medium rounded-lg p-2 text-center focus:outline-none focus:ring-4 focus:ring-orange-500 transition-all duration-200"
                    >
                        <option value="">Work Time</option>
                        <option value="1">1 min</option>
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                        <option value="15">15 min</option>
                        <option value="20">20 min</option>
                        <option value="25">25 min</option>
                        <option value="30">30 min</option>
                        <option value="35">35 min</option>
                        <option value="40">40 min</option>
                        <option value="45">45 min</option>
                        <option value="50">50 min</option>
                        <option value="55">55 min</option>
                        <option value="60">60 min</option>
                    </select>

                    <h1 className="text-3xl mt-10 font-semibold mb-6 text-orange-400 tracking-wide">
                        Break Timer
                    </h1>

                    <select value={option2} onChange={ (e) => setOption2(e.target.value) }
                        name=""
                        id=""
                        className="w-40 text-lg bg-slate-700 text-orange-300 font-medium rounded-lg p-2 text-center focus:outline-none focus:ring-4 focus:ring-orange-500 transition-all duration-200"
                    >
                        <option value="">Break Time</option>
                        <option value="1">1 min</option>
                        <option value="2">2 min</option>
                        <option value="3">3 min</option>
                        <option value="4">4 min</option>
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                        <option value="15">15 min</option>
                        <option value="20">20 min</option>
                        <option value="25">25 min</option>
                        <option value="30">30 min</option>
                    </select>

                    <button onClick={handlesubmit}  type="submit" className="mt-10 px-15 text-xl py-5 rounded-2xl bg-green-800 cursor-pointer hover:shadow-lg active:shadow-red-600 hover:shadow-cyan-500 border-2  border-slate-500">Start</button>
                </div>
            </div>
        </div>
    );
}

export default Pomodoro;
