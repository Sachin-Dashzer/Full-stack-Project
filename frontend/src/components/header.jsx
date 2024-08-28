const Header = () => {
  return (
    <>
      <header className="py-2">
        <div className="topbar pb-2 px-4 flex items-center justify-between border-b-[1px] border-green-900">
          <div>
            <p className="text-sm">Welcome to our store</p>
          </div>
          <div>
            <ul className="flex gap-5 items-center text-sm pr-6">
              <li>
                <p className="text-sm">Login Or Register</p>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar px-8 py-2">
          <div className="nav-1 flex items-center justify-between">
            <div className="logoBox">
              <h2 className="text-5xl font-bold font-serif text-yellow-500">Backend</h2>
            </div>
            <div className="searchBox">
              <div className="searchBox py-4">
                <input type="text" placeholder="Search..." className="bg-none outline-none py-[7px] w-[500px] px-4" />
                <button className="px-6 py-[7px] text-black border-l-2 border-black bg-yellow-400">Submit</button>
              </div>
            </div>
            <div className="storedata">
              <ul className="flex items-center gap-5 text-2xl pr-6">
                <li>
                  <a href="#">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-user-tie"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-2 py-4 text-lg font-semibold flex items-center justify-center">
            <div className="nav-menu  pl-24">
              <ul className="flex gap-10 text-md">
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="#">Pages <i class="fa-solid fa-chevron-down pl-[4px]"></i></a>
                </li>
                <li>
                  <a href="#">Shop <i class="fa-solid fa-chevron-down pl-[4px]"></i></a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Our Blogs <i class="fa-solid fa-chevron-down pl-[4px]"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
