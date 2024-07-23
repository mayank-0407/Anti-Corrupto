import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../Utils/API/authAPI';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const [error, setError] = useState('');
  const [iserror, setIsError] = useState(false);
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      console.error('Both Passwords must be same!');
    }

    const name = fname.concat(' ', lname);
    let values = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const res = await signUpUser(values);
      if (res.status === 200) {
        navigate('/login');
        setIsError(true);
        setError(res.msg);
      } else {
        setIsError(true);
        setError(res.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="h-screen flex flex-row justify-center items-center font object-cover"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className="   m-20 p-4 flex flex-row items-center justify-center rounded-xl backdrop-brightness-90">
        <div className="flex flex-col md:flex-row">
          {/* <div className="md:w-2/3 order-1 md:order-2 mb-4 md:mb-0">
            <img
              src="/login.jpg"
              alt="Login Logo"
              className="w-full h-auto md:h-full object-cover rounded-xl"
            />
          </div> */}
          <div className=" order-2 md:order-1">
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-10 text-center">Signup</h1>

              <form className="mb-4" onSubmit={handleSignup}>
                <div className="mb-2 flex">
                  <div className="mr-2 w-1/2">
                    <label htmlFor="firstName" className="block mb-2 text-left font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      value={fname}
                      onChange={(e) => setFName(e.target.value)}
                      placeholder="Enter First Name"
                      className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50 opacity-50"
                      required
                    />
                  </div>
                  <div className=" w-1/2">
                    <label htmlFor="firstName" className="block mb-2 text-left font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      value={lname}
                      onChange={(e) => setLName(e.target.value)}
                      placeholder="Enter Last Name"
                      className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50 opacity-50"
                      required
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="block mb-2 text-left font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter the Email Address"
                    className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50 opacity-50"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="pnumber" className="block mb-2 text-left font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phoneNum"
                    id="phoneNum"
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    placeholder="Enter the Phone Number"
                    className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50 opacity-50"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="block mb-2 text-left font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter the Password"
                    className="w-full p-2 border border-gray-300 rounded-2xl mb-2 bg-blue-50 text-sm opacity-50"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block mb-2 text-left font-semibold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Enter the Password Again"
                    className="w-full p-2 border border-gray-300 rounded-2xl mb-2 bg-blue-50 text-sm opacity-50"
                    required
                  />
                </div>
                {iserror ? (
                  <div class="px-1 my-2 text-sm text-red-500 rounded-lg" role="alert">
                    <span class="font-medium"> {'*' + error} </span>
                  </div>
                ) : (
                  <></>
                )}
                <button type="submit" className="bg-blue-800 text-white p-2 w-full rounded-2xl">
                  Submit
                </button>
              </form>
              <div className="flex pt-4 items-center justify-center">
                <p className="mr-2">Already Having an Account?</p>
                <button className="text-blue-800 font-bold">
                  <NavLink to={'/login'}>Login</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
