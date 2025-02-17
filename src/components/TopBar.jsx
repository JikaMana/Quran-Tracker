import { Bell, Moon } from "lucide-react";
import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router";
import { ROUTES } from "../routes";

const TopBar = () => {
  return (
    <header
      id="header"
      className="bg-white shadow-sm py-4  mx-auto fixed w-full"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to={ROUTES.HOME} className="flex items-center space-x-2">
          <BiLeftArrowAlt className="text-emerald-600" size={32} />
          <h1 className="text-2xl font-bold text-gray-800">Quran Tracker</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Bell className="text-gray-600" size={24} />
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
