import { useState } from "react";

const Header = () => {
  const [formBox, setformBox] = useState(false);

  return (
    <>
      <header className="py-2">
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
            <div className="searchBox w-[55%] mx-auto">
              <div className="searchBox w-full py-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-none outline-none py-[7px] w-[70%] px-4"
                />
                <button className="px-6 py-[7px] text-black border-l-2 border-black bg-yellow-400">
                  Submit
                </button>
              </div>
            </div>
            <div className="storedata">
              <ul className="flex items-center gap-5 text-2xl pr-6">
                <li>
                  <a href="#">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-user-tie"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-2 py-4 text-lg font-semibold flex items-center justify-center">
            <div className="nav-menu  ">
              <ul className="flex gap-10 text-md">
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="#">
                    Pages <i className="fa-solid fa-chevron-down pl-[4px]"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Shop <i className="fa-solid fa-chevron-down pl-[4px]"></i>
                  </a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">
                    Our Blogs <i className="fa-solid fa-chevron-down pl-[4px]"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
{/* 
      <section className="w-full h-full absolute left-0 top-0 z-10 bg-black backdrop-blur bg-opacity-50 flex justify-center items-center">
        <div className="login-form w-2/5 p-5 bg-slate-900 backdrop-blur-sm ">
          <form action="/login-submit" method="Post" className="w-full">
            <div className="formBox w-[430px]">
              <input type="text" placeholder="Name" name="name" className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-100"/>
            </div>
            <div className="formBox w-[430px]">
              <input type="number" placeholder="Phone" name="phone" className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-100"/>
            </div>
            <div className="formBox w-[430px]">
              <input type="email" placeholder="Email" name="email" className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-100"/>
            </div>
            
            <div className="formBox w-[430px]"> 
              <input type="number" placeholder="Age" name="age" className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-100"/>
            </div>
          </form>
        </div>


      </section> */}
    </>
  );
};

export default Header;
