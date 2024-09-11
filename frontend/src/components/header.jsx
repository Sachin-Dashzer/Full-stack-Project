import { useState } from "react";
import HeaderForm from './HeaderForm';
import { Link } from "react-router-dom";


const Header = () => {
  const [formBox, setformBox] = useState(false);

  return (
    <>
      <header className="py-2 w-[100vw] overflow-hidden">
        <div className="topbar pb-2 px-4 flex items-center justify-between border-b-[1px] border-green-900">
          <div>
            <p className="text-sm text-green-500 pl-6 tracking-widest">
              Welcome to our store...
            </p>
          </div>
          <div>
            <ul className="flex gap-5 items-center text-sm pr-6 cursor-pointer">
              <li>
                <p className="text-sm">Login Or Register</p>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar px-8 py-2">
          <div className="nav-1 flex items-center justify-between">
            <div className="logoBox">
              <h2 className="text-5xl font-bold font-serif text-yellow-500">
                Backend
              </h2>
            </div>
            <div className="nav-menu  ">
              <ul className="flex gap-10 text-md">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/pages">
                    Pages <i className="fa-solid fa-chevron-down pl-[4px]"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/shop">
                    Shop <i className="fa-solid fa-chevron-down pl-[4px]"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blogs">
                    Our Blogs{" "}
                    <i className="fa-solid fa-chevron-down pl-[4px]"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="storedata">
              <ul className="flex items-center gap-5 text-2xl pr-6">
                <li>
                  <a href="#">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                </li>
                <li className="cursor-pointer" onClick={() => { setformBox(!formBox) }}>

                  <i className="fa-solid fa-user-tie"></i>

                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </header>

      <HeaderForm formBox={formBox} setformBox={setformBox} />


    </>
  );
};

export default Header;
