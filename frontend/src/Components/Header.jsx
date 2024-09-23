import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="w-100 overflow-hidden">


        <div className="topHeader h-8 w-100 flex justify-end items-center px-20 bg-primary border-b-[1px] border-stone-100">
          <div className="top-left">
            <ul className="flex cursor-pointer">
              <li><a href="#" className="text-sm  border-r-[1px] border-stone-100 text-white px-4">+91 98653 32345</a></li>
              <li><a href="#" className="text-sm  border-r-[1px] border-stone-100 text-white px-4"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#" className="text-sm  border-r-[1px] border-stone-100 text-white px-4"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="#" className="text-sm  text-white pl-4"><i class="fa-brands fa-x-twitter"></i></a></li>
            </ul>
          </div>
        </div>


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
              <li className="cursor-pointer mx-1"><i className="fa-solid fa-magnifying-glass"></i></li>
              <li className="cursor-pointer mx-1"><i className="fa-solid fa-user"></i></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
