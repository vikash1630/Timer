import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { useLocation, Link } from "react-router-dom";

function Pomodorotimerstart() {
  const location = useLocation();
  const { selection1, selection2 } = location.state || {};

  const workValue = parseFloat(selection1);
  const breakValue = parseFloat(selection2);

  if (!isNaN(workValue) && !isNaN(breakValue)) {
    let work = workValue * 60;
    let breakTi = breakValue * 60;

    const [worktime, setworktime] = useState(work);
    const [breaktime, setbreaktime] = useState(breakTi);
    const [isPaused, setIsPaused] = useState(true);
    const [isWorkStarted, setIsWorkStarted] = useState(false);
    const [isBreakStarted, setIsBreakStarted] = useState(false);

    // ================= WORK TIMER =================
    useEffect(() => {
      if (isPaused || !isWorkStarted) return;

      const interval = setInterval(() => {
        setworktime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }, [isPaused, isWorkStarted]);

    // ================= BREAK TIMER =================
    useEffect(() => {
      if (isPaused || !isBreakStarted) return;

      const interval = setInterval(() => {
        setbreaktime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }, [isPaused, isBreakStarted]);

    // ================= WORK FINISHED =================
    useEffect(() => {
      if (worktime === 0 && isWorkStarted && !isBreakStarted) {
        alert("Work time done! Start your break.");
        setIsPaused(true);
        setIsWorkStarted(false);

        // ✅ Reset work timer for next round
        setworktime(work);

        // ✅ Show "Start Break" button
        setIsBreakStarted(false);
      }
    }, [worktime, isWorkStarted, isBreakStarted]);

    // ================= BREAK FINISHED =================
    useEffect(() => {
      if (breaktime === 0 && isBreakStarted && !isWorkStarted) {
        alert("Break time done! Start working again.");
        setIsPaused(true);
        setIsBreakStarted(false);

        // ✅ Reset break timer for next round
        setbreaktime(breakTi);

        // ✅ Show "Start Work" button again
        setIsWorkStarted(false);
      }
    }, [breaktime, isBreakStarted, isWorkStarted]);

    // ================= BUTTON HANDLERS =================
    const handleStartWork = () => {
      setIsWorkStarted(true);
      setIsBreakStarted(false);
      setIsPaused(false);
    };

    const handleStartBreak = () => {
      setIsBreakStarted(true);
      setIsWorkStarted(false);
      setIsPaused(false);
    };

    const handlePause = () => setIsPaused((prev) => !prev);

    const handleReset = () => {
      setIsPaused(true);
      setIsWorkStarted(false);
      setIsBreakStarted(false);
      setworktime(work);
      setbreaktime(breakTi);
    };

    // ================= UI =================
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
        <div className="fixed top-0 left-0 w-full z-20">
          <Nav />
        </div>

        <div className="flex-grow flex flex-col items-center justify-center mt-24 space-y-6">
          <div className="bg-slate-800/60 backdrop-blur-md px-10 py-8 rounded-2xl shadow-xl text-center">
            <h1 className="text-4xl font-bold text-green-400 mb-4 tracking-wide">
              Work Time: <span className="text-white">{worktime}s</span>
            </h1>
            <h1 className="text-3xl font-semibold text-blue-400 mb-2">
              Break Time: <span className="text-white">{breaktime}s</span>
            </h1>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              {/* ✅ Show Start Work only if not currently working */}
              {!isWorkStarted && (
                <button
                  onClick={handleStartWork}
                  className="px-6 py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:scale-105 transition-transform duration-200"
                >
                  Start Work
                </button>
              )}

              {/* ✅ Show Start Break only if not currently on break */}
              {!isBreakStarted && (
                <button
                  onClick={handleStartBreak}
                  className="px-6 py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 hover:scale-105 transition-transform duration-200"
                >
                  Start Break
                </button>
              )}

              {/* Pause / Resume */}
              <button
                onClick={handlePause}
                disabled={!isWorkStarted && !isBreakStarted}
                className={`px-6 py-3 rounded-xl text-lg font-semibold transition-transform duration-200 
                  ${
                    !isWorkStarted && !isBreakStarted
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105"
                  }`}
              >
                {isPaused ? "Resume" : "Pause"}
              </button>

              {/* Reset */}
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-red-600 to-pink-600 hover:scale-105 transition-transform duration-200"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ================= INVALID OPTION FALLBACK =================
  useEffect(() => {
    alert("Invalid Option");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white space-y-4">
      <h1 className="text-3xl font-semibold">Invalid Option</h1>
      <Link
        to="/Pomodoro"
        className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back
      </Link>
    </div>
  );
}

export default Pomodorotimerstart;
