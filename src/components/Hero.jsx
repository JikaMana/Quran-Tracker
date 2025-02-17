import React from "react";
import heroImage from "../assets/images/Quran.jpg";
import { FaQuestionCircle, FaQuran, FaScroll } from "react-icons/fa";
import { ROUTES } from "../routes";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-full bg-gradient-to-b from-green-50 to-white">
      <div className="flex flex-col justify-center items-center mt-28">
        <div className="max-w-60 max-h-60 object-center overflow-hidden mb-8">
          <img src={heroImage} alt="h-full w-full" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Your Digital Companion for Progress Tracking
        </h2>
        <p className="text-xl my-8 max-w-[682px] text-center">
          Discover the beauty of the Quran, Hadith, and Islamic practices
          through our comprehensive digital platform
        </p>
        <div className="flex gap-4">
          <Link
            to={ROUTES.QURAN_TRACKER}
            className="text-lg bg-green-700 py-2 px-4 rounded-md text-white"
          >
            Start Tracking progress
          </Link>
          <Link
            to={ROUTES.HOME}
            className="text-lg bg-transparent border-2 border-amber py-2 px-4 rounded-md text-amber"
          >
            Start Reading Adhkar
          </Link>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-8">
        <Link to={ROUTES.QURAN_TRACKER} className="shadow-xl rounded-xl p-4">
          <FaQuran size={32} color="green" />
          <h3 className="text-3xl font-bold my-2">Quran Tracker</h3>
          <p>
            Track your daily Quran reading progress and maintain your streak
          </p>
        </Link>
        <Link to={ROUTES.HOME} className="shadow-xl rounded-xl p-4">
          <FaScroll size={32} color="oklch(0.828 0.189 84.429)" />
          <h3 className="text-3xl font-bold my-2">Daily Adhkar</h3>
          <p>Keep track of your daily morning and evening supplications</p>
        </Link>
        <Link to={ROUTES.HOME} className="shadow-xl rounded-xl p-4">
          <FaQuestionCircle size={32} color="green" />
          <h3 className="text-3xl font-bold my-2">Hadith Collection</h3>
          <p>Access authentic Hadith collections with translations</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
