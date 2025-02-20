import TopBar from "../components/TopBar";
import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { FaQuoteRight } from "react-icons/fa";

// One week in milliseconds
// const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const ONE_WEEK_MS = 1 * 60 * 1000;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

const QuranTrackerMVP = () => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [dailyGoal, setDailyGoal] = useState(null);
  const [goalInput, setGoalInput] = useState("");
  const [isGoalLocked, setIsGoalLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const storedTimestamp = localStorage.getItem("dailyGoalTimestamp");
    const storedGoal = localStorage.getItem("dailyGoal");
    if (storedTimestamp && storedGoal) {
      const diff = Date.now() - parseInt(storedTimestamp, 10);
      if (diff < ONE_WEEK_MS) {
        setDailyGoal(parseInt(storedGoal, 10));
        setIsGoalLocked(true);
        // Set the remaining time
        setTimeLeft(formatTime(ONE_WEEK_MS - diff));

        // Set up an interval to update the remaining time every second
        const intervalId = setInterval(() => {
          const newDiff = Date.now() - parseInt(storedTimestamp, 10);
          if (newDiff < ONE_WEEK_MS) {
            setTimeLeft(formatTime(ONE_WEEK_MS - newDiff));
          } else {
            // Unlock goal after one week
            localStorage.removeItem("dailyGoalTimestamp");
            localStorage.removeItem("dailyGoal");
            setIsGoalLocked(false);
            setDailyGoal(null);
            setTimeLeft("");
            clearInterval(intervalId);
          }
        }, 1000);

        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
      } else {
        // Allow changes if one week has passed
        localStorage.removeItem("dailyGoalTimestamp");
        localStorage.removeItem("dailyGoal");
        setIsGoalLocked(false);
      }
    }
  }, [timeLeft]);

  const handleSetGoal = () => {
    const parsedValue = parseInt(goalInput, 10); // Converts goalInput to a number (base 10)
    if (!isNaN(parsedValue) && parsedValue >= 1 && !isGoalLocked) {
      setDailyGoal(parsedValue);
      // Save the goal and the current timestamp to localStorage
      localStorage.setItem("dailyGoal", parsedValue);
      localStorage.setItem("dailyGoalTimestamp", Date.now().toString());
      setIsGoalLocked(true);
      setTimeLeft(formatTime(ONE_WEEK_MS));
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-base-content">
      <TopBar />

      <main className="container mx-auto px-4 py-8">
        <section
          id="motivation"
          className="bg-emerald-50 rounded-lg p-6 mb-8 mt-16"
        >
          <div className="flex items-start space-x-4">
            <FaQuoteRight className="text-emerald-600" size={32} />
            <div>
              <p className="text-gray-600 italic mb-2">
                "Indeed, We have sent it down as an Arabic Qur'an that you might
                understand."
              </p>
              <p className="text-sm text-emerald-600">Surah Yusuf, Verse 2</p>
            </div>
          </div>
        </section>

        <section
          id="goal-setup"
          className="bg-white rounded-lg p-6 mb-8 shadow-sm"
        >
          <h2 className="text-xl text-gray-800 mb-4">Daily Goal Setup</h2>
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="flex-1">
              <label className="block text-lg text-gray-600 mb-2">
                Tracked by Number Of Pages
              </label>
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2">
                Daily Target
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter pages"
                min="1"
                max="604"
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                disabled={isGoalLocked}
              />
            </div>
            <button
              className={`bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 ${
                isGoalLocked ? "bg-emerald-300" : ""
              }`}
              onClick={handleSetGoal}
              disabled={isGoalLocked}
            >
              Set Pages
            </button>
          </div>
          {isGoalLocked && dailyGoal ? (
            <>
              <h2 className="block text-gray-600 text-xl font-medium my-2 text-center">
                Your daily goal is {dailyGoal} pages
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Once the number of pages is selected, it cannot be changed for
                the next 1 week.
              </p>
              {timeLeft && (
                <p className="text-sm text-gray-500 mt-2">
                  Time remaining: {timeLeft}
                </p>
              )}
            </>
          ) : (
            <h2 className="block text-gray-600 text-xl font-medium mt-4 mb-2 text-center">
              Your daily goal has not been set. Kindly select the number of
              pages to recite daily.
            </h2>
          )}
        </section>

        <section id="progress" className="grid md:grid-cols-2 gap-8 mb-8">
          <div
            id="daily-progress"
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <h2 className="text-xl text-gray-800 mb-4">Weekly Progress</h2>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl text-emerald-600">75%</span>
                </div>
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="3"
                    // strokeDasharray is the one showing the green progress
                    strokeDasharray="75, 100"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div id="reminder" className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl text-gray-800 mb-4">Reminder Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Whatsapp Daily Reminder</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-emerald-600 peer-focus:outline-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Email Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-emerald-600 peer-focus:outline-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
            </div>
          </div>
        </section>

        <section
          id="weekly-overview"
          className="bg-white rounded-lg p-6 shadow-sm mb-8"
        >
          <h2 className="text-xl text-gray-800 mb-4">Weekly Overview</h2>
          <div className="grid grid-cols-7 gap-4">
            {weekDays.map((day, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-sm text-gray-600">{day}</div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto ${
                    day === "Thu"
                      ? "bg-red-100"
                      : day === "Sat" || day === "Sun"
                      ? "bg-gray-100"
                      : "bg-emerald-100"
                  }`}
                >
                  {day === "Thu" ? (
                    <X className="text-red-600" size={16} />
                  ) : day === "Sat" || day === "Sun" ? (
                    <span className="text-gray-400">-</span>
                  ) : (
                    <Check className="text-emerald-600" size={16} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            "The best among you is the one who learns the Quran and teaches it."
          </p>
          <p className="text-sm text-gray-500 mt-2">Ramadan 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default QuranTrackerMVP;
