import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const HeaderForm = ({ formBox, setformBox }) => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    address: "",
  });

  const formValue = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const formSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log(formData);

  //   try {
  //     const response = await fetch('http://localhost:5000/api/form', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData)
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log('Success:', data);

  //     setformBox(!formBox);
  //     navigate('/thanks')
      


  //   } catch (error) {
  //     console.error('Error:', error);
      
  //   }
  // };

  return (
    <>
      <section
        className={`w-full h-full fixed z-10 left-0 top-0 bg-white backdrop-blur bg-opacity-50 flex justify-center items-center ${formBox ? "flex" : "hidden"
          }`}
      >
        <div className="login-form w-2/5 p-5 px-10 bg-white backdrop-blur-sm rounded-md overflow-hidden">
          <div
            onClick={() => {
              setformBox(!formBox);
              console.log(formBox);
            }}
            className="cancelBtn absolute right-4 top-2 font-bold cursor-pointer text-black text-4xl rotate-45 "
          >
            +
          </div>

          <h3 className="text-4xl font-serif text-black text-center my-3 font-semibold">
            Sign In Form
          </h3>

          <form className="w-full">
            <div className="login-container">
              <div className="formBox">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={formValue}
                  name="name"
                  className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-950 text-black"
                />
              </div>
              <div className="formBox">
                <input
                  type="number"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={formValue}
                  name="phone"
                  className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-950 text-black"
                />
              </div>
              <div className="formBox">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={formValue}
                  name="email"
                  className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-950 text-black"
                />
              </div>
              <div className="formBox">
                <input
                  type="number"
                  placeholder="Age"
                  value={formData.age}
                  onChange={formValue}
                  name="age"
                  className="w-full outline-none p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-950 text-black"
                />
              </div>
            </div>
            <div className="formBox">
              <textarea
                name="address"
                id="address"
                placeholder="Address"
                onChange={formValue}
                value={formData.address}
                className="w-full outline-none h-[80px] p-2 my-3 mx-auto bg-transparent border-b-[1px] border-slate-950 text-black"
              ></textarea>
            </div>

            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black backdrop-blur-lg px-8 py-[10px] my-3 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-slate-300">
              <span className="text-md">Submit</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/30"></div>
              </div>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HeaderForm;
