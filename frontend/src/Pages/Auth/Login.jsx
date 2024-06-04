import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Utils/API/authAPI';
import { setSessionToken, isLogin } from '../../Utils/cookieSetup';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [isLoggedd, setisLoggedd] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let values = { email: email, password: password };
    try {
      const response = await loginUser(values);

      if (response.session.sessionToken) {
        setSessionId(response.session.sessionToken);
        setSessionToken(response.session.sessionToken);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkLoginSession = isLogin();
    if (checkLoginSession) {
      setisLoggedd(true);
      navigate('/dashboard');
    } else {
      setisLoggedd(false);
      navigate('/login');
    }
  }, []);

  return (
    <div
      className="h-screen flex flex-row justify-center items-center font object-cover"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className=" p-4  m-20  flex flex-row items-center justify-center rounded-xl backdrop-brightness-90">
        <div className="flex flex-col md:flex-row">
          <div className="order-2 md:order-1">
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
              <form onSubmit={handleLogin} className="mb-4">
                <div className="mb-2">
                  <label htmlFor="email" className="block mb-2 text-left font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter the Email Address"
                    className="w-full p-2 border border-gray-300 rounded-xl mb-2 text-sm bg-gray-200 opacity-50"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block mb-2 text-left font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter the Password"
                    className="w-full p-2 border border-gray-300 rounded-xl mb-2 bg-gray-200 text-sm opacity-50"
                  />
                </div>
                <button type="submit" className="bg-blue-800 text-white p-2 w-full rounded-xl">
                  Login
                </button>
              </form>
              <div className="flex pt-4 items-center justify-center">
                <p className="mr-2">Don't have an account?</p>
                <button onClick={() => navigate('/Signup')} className="text-blue-800 font-bold">
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
