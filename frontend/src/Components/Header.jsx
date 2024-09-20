import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="w-100 overflow-hidden">
        <nav className="w-100 h-16 flex bg-primary text-white justify-between px-20 py-2 items-center ">
          <div className="header-logo">
            <h2 className="text-2xl font-bold text-serif">Blogsy</h2>
          </div>
          <div className="head-links">
            <ul className="flex gap-5 text-md items-lg-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/category">Category</Link>
              </li>
              <li>
                <Link to="/trending">Trendings</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="head-icons">
            <ul className="flex items-center gap-4">
              <li><i className="fa-solid fa-magnifying-glass"></i></li>
              <li><i className="fa-solid fa-user"></i></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
