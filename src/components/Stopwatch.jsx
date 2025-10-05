import React, { useEffect, useState } from "react";
import "./local.css";
import Nav from "./Nav";

function Stopwatch() {
  const [status, setstatus] = useState("start");

  // Time states
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setmilliseconds] = useState(0);
  const [lap, setLap] = useState("00:00:00:00");

  const [running, setRunning] = useState(false);

  const Lap = () => {
    setLap(() => `${hours}:${minutes}:${seconds}:${milliseconds}`);
  };

  useEffect(() => {
    let timer;
    if (running) {
      let ms = milliseconds;
      let s = seconds;
      let m = minutes;
      let h = hours;

      timer = setInterval(() => {
        ms += 1;
        if (ms > 99) {
          ms = 0;
          s += 1;
        }
        if (s > 59) {
          s = 0;
          m += 1;
        }
        if (m > 59) {
          m = 0;
          h += 1;
        }

        setmilliseconds(ms);
        setSeconds(s);
        setMinutes(m);
        setHours(h);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [running]);

  const handletoggle = () => {
    if (status === "start") {
      setRunning(true);
      setstatus("stop");
    } else if (status === "stop") {
      setRunning(false);
      setstatus("resume");
    } else {
      setRunning(true);
      setstatus("stop");
    }
  };

  const handlereset = () => {
    setRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setmilliseconds(0);
    setLap("00:00:00:00");
    setstatus("start");
  };

  const getbuttoncolor = () => {
    if (status === "start" || status === "resume") {
      return "bg-green-500 hover:bg-green-600";
    } else {
      return "bg-red-500 hover:bg-red-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-pink-700 to-amber-500 text-white flex flex-col bg-fixed">
      <Nav />
      <div className="flex-1 flex items-start justify-center px-4 pt-6 md:pt-12">
        <div className="w-full max-w-4xl border border-amber-400/25 bg-gradient-to-br from-black/40 via-black/20 to-white/3 backdrop-blur-md rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.45)] flex flex-col items-center p-8 md:p-12 gap-6 transition-transform duration-300">
          <div className="text-center text-lg md:text-2xl uppercase tracking-widest text-amber-300 font-extrabold drop-shadow-lg">
            Stopwatch
          </div>

          <div className="text-[3.75rem] md:text-[5rem] lg:text-[6.5rem] font-extrabold text-white text-center leading-none tracking-tight md:tracking-widest drop-shadow-[0_0_18px_rgba(255,255,255,0.65)]">
            {String(hours).padStart(2, "0")}:
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
            <span className="inline-block align-middle text-[1.9rem] md:text-[3.25rem] lg:text-[3.75rem] text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] ml-2">
              :{String(milliseconds).padStart(2, "0")}
            </span>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center md:justify-center gap-3 md:gap-6 mt-2">
            <button
              onClick={handletoggle}
              className={`transition-all duration-200 ${getbuttoncolor()} px-8 py-3 md:px-12 md:py-4 border-2 border-amber-400 rounded-xl text-base md:text-lg w-full md:w-56 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.18)] focus:outline-none focus:ring-4 focus:ring-amber-300/25`}
            >
              {status.toUpperCase()}
            </button>

            <button
              onClick={Lap}
              className="transition-all duration-200 bg-orange-400 hover:bg-orange-500 px-8 py-3 md:px-12 md:py-4 border-2 border-amber-400 rounded-xl text-base md:text-lg w-full md:w-56 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.12)] focus:outline-none focus:ring-4 focus:ring-amber-300/20"
            >
              LAP
            </button>

            <button
              onClick={handlereset}
              className="transition-all duration-200 bg-amber-900 hover:bg-amber-800 px-8 py-3 md:px-12 md:py-4 border-2 border-amber-400 rounded-xl text-base md:text-lg w-full md:w-56 font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-4 focus:ring-amber-300/15"
            >
              RESET
            </button>
          </div>

          <div className="w-full text-sm md:text-xl text-amber-300 font-semibold tracking-wide mt-6 border-t border-amber-400/20 pt-4 text-center">
            Current Lap:{" "}
            <span className="text-white font-mono text-lg md:text-2xl inline-block mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">
              {lap}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
