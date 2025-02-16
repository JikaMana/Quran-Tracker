import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className=" mx-4">
      <div className="flex justify-center w-full">
        <Header />
      </div>
      <Hero />
      <div className="bg-green-100 h-80 flex flex-col justify-center items-center">
        <h2 className="text-3xl xl:text-4xl font-bold">Stay Connected</h2>
        <p className="text-xl my-4 text-center">
          Subscribe to our newsletter for daily verses, Hadith, and Islamic
          reminders
        </p>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-white px-4 py-3 rounded-lg w-max"
          />
          <button className="ml-4 bg-primary-green h-full px-4 rounded-lg font-medium text-white">
            Subscribe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
