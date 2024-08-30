import { useState } from "react";

const headerForm = () => {


    // const [formBox, setformBox] = useState(false);



  return (
    <>
      <section className="w-full h-full fixed z-10 left-0 top-0 bg-white backdrop-blur bg-opacity-50 flex justify-center items-center">
        <div className="login-form w-2/5 p-5 px-10 bg-white backdrop-blur-sm rounded-md overflow-hidden">

            <div className="cancelBtn absolute right-0 top-0 text-black text-2xl rotate-45 ">+</div>


          <h3 className="text-4xl font-serif text-black text-center my-3 font-semibold">
            Sign In Form
          </h3>

          <form action="/login-submit" method="Post" className="w-full">
            <div className="login-container">
              <div className="formBox">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-950 text-black"
                />
              </div>
              <div className="formBox">
                <input
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-950 text-black"
                />
              </div>
              <div className="formBox">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-950 text-black"
                />
              </div>
              <div className="formBox">
                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-950 text-black"
                />
              </div>
            </div>
            <div className="formBox">
              <textarea
                name="massage"
                id="massage"
                placeholder="Address"
                className="w-full outline-none h-[80px] p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-950 text-black"
              ></textarea>
            </div>

            <button class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black backdrop-blur-lg px-8 py-[10px] my-3 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-slate-300">
              <span class="text-md">Submit</span>
              <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div class="relative h-full w-10 bg-white/30"></div>
              </div>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default headerForm;
