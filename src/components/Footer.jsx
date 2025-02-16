import { Facebook } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="mt-20 xl:mx-20 mx-10">
      <div className="flex flex-col md:flex-row gap-8 justify-between mb-10">
        <div>
          <Link to="/" className="my-3">
            <div className="main-logo flex items-center gap-x-1 ">
              <i className="fa-solid fa-book-open text-lime-950"></i>
              <h1 className="text-lime-950 text-xl font-bold">About Us</h1>
            </div>
          </Link>
          <p className=" text-lime-950 text-md font-medium max-w-xs my-4">
            Dedicated to providing authentic Islamic content and tools for
            spiritual growth
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:justify-between flex-[0.8]">
          <div className="flex flex-col gap-y-4 ">
            <h3 className="font-semibold text-lg">Navigate</h3>
            <div className="flex flex-col gap-y-4 font-medium text-sm">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/about">
                <p>Quran</p>
              </Link>
              <Link to="/reciters">
                <p>Adhkar</p>
              </Link>
              <Link to="/blog">
                <p>Hadith</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="flex flex-col gap-y-4 font-medium text-sm">
              <Link to="#">
                <p>FAQ</p>
              </Link>
              <Link to="#">
                <p>Contact</p>
              </Link>
              <Link to="#">
                <p>Privacy Policy</p>
              </Link>
              <Link to="#">
                <p>Terms of Services</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-lime-950 text-xl font-bold">Connect</h2>
            <div
              id="contactUs"
              className="flex gap-y-4 gap-x-2 font-medium text-sm"
            >
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaYoutube size={24} />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[1px] border-lime-950 my-2" />
      <div className="flex justify-center font-medium mb-2">
        <p>
          <Link to="/" className="text-primary-green text-xl font-bold">
            Noor
          </Link>{" "}
          &copy; 2025 <span></span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
