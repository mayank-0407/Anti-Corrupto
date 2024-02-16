import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-800 p-6">
      <div className="flex items-center justify-center min-h-screen mx-20">
        <div className=" w-full bg-white rounded-xl shadow-xl p-8 mr-5">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 order-1 md:order-2 mb-4 md:mb-0">
              <img
                src="/login.jpg"
                alt="Login Logo"
                className="w-full h-auto md:h-full object-cover rounded-xl"
              />
            </div>
            <div className="md:w-1/3 order-2 md:order-1">
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Signup</h1>
                <form className="mb-4">
                  <div className="mb-2 flex">
                    <div className="mr-2 w-1/2">
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-left font-semibold"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter First Name"
                        className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50"
                      />
                    </div>
                    <div className=" w-1/2">
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-left font-semibold"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter Last Name"
                        className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-left font-semibold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter the Email Address"
                      className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="pnumber"
                      className="block mb-2 text-left font-semibold"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="pnumber"
                      id="pnumber"
                      placeholder="Enter the Phone Number"
                      className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-left font-semibold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter the Password"
                      className="w-full p-2 border border-gray-300 rounded-2xl mb-2 bg-blue-50 text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="cpassword"
                      className="block mb-2 text-left font-semibold"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      placeholder="Enter the Password Again"
                      className="w-full p-2 border border-gray-300 rounded-2xl mb-2 bg-blue-50 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-800 text-white p-2 w-full rounded-2xl"
                  >
                    Submit
                  </button>
                </form>
                <div className="flex items-center justify-center">
                  <p className="mr-2">Already Having an Account?</p>
                  <button
                    onClick={() => navigate("/login")}
                    className="text-blue-800"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;