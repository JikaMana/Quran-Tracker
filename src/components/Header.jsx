import { Church, Hand, Moon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { ROUTES } from "../routes";

const Header = () => {
  return (
    <header className="fixed flex justify-between bg-white p-4 items-center max-w-[1280px]  w-full">
      <h1 className="text-4xl text-primary-green font-bold">Noor</h1>
      <nav className="hidden md:block">
        <ul className="flex gap-x-8">
          <Link
            to={ROUTES.QURAN_TRACKER}
            className="text-xl hover:text-primary-green"
          >
            Quran Tracker
          </Link>
          <Link to="/" className="text-xl hover:text-primary-green">
            Adhkar
          </Link>
          <Link to="/" className="text-xl hover:text-primary-green">
            Tasbeeh
          </Link>
        </ul>
      </nav>
      <div className="flex gap-x-4 items-center">
        <Moon size={36} />
        <button className="text-lg bg-primary-green py-2 px-4 rounded-md text-white">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
