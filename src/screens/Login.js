import React, { useState } from "react";
import { Link } from "react-router-dom";
import transaction from "../assets/transaction.png";
import logo from "../assets/payfi-logo.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();
    try {
      // ... (your login logic)
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="h-full">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-center py-4 lg:py-28 lg:px-60 border-solid bg-gray-200">
          <div className="w-full lg:w-4/12 bg-[#6a5acd] dark:bg-gray-800 bg-cover rounded-lg lg:rounded-l-none">
            <div className="flex justify-center items-center pt-3">
              <img
                className="h-12 bg-white px-2 rounded-3xl"
                src={logo}
                alt=""
              />
            </div>
            <div className="flex justify-center -mt-6">
              <img className="h-64" src={transaction} alt="" />
            </div>
            <div className="flex flex-col justify-start pl-8 pb-12">
              <div className="text-white font-bold text-2xl py-2">
                <h2>Feature Highlights:</h2>
              </div>
              <div className="flex text-white py-1 text-sm">
                <CheckCircleOutlineIcon />
                <h3 className="ml-2">One Click Registration</h3>
              </div>
              <div className="flex text-white py-1 text-sm">
                <CheckCircleOutlineIcon />
                <h3 className="ml-2">Smooth Transaction</h3>
              </div>
              <div className="flex text-white py-1 text-sm">
                <CheckCircleOutlineIcon />
                <h3 className="ml-2">Secure-payment environment</h3>
              </div>
              <div className="flex text-white py-1 text-sm">
                <CheckCircleOutlineIcon className="f" />
                <h3 className="ml-2">Easy expense tracking</h3>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-8/12 bg-white dark:bg-gray-700 p-5 rounded-lg">
            <h3 className="py-4 font-extrabold text-2xl text-center text-gray-800 dark:text-white">
              Login
            </h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight border border-black rounded appearance-none"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight border border-black rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-[#6a5acd] rounded dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={login}
                >
                  Login
                </button>
              </div>

              <div className="text-center">
                <span className="text-[#6d6d6d]">Don't have an account?</span>
                <Link
                  className="inline-block text-base text-[#6a5acd] align-baseline ml-2 hover:text-blue-800"
                  to="/signup"
                >
                  Signup!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
