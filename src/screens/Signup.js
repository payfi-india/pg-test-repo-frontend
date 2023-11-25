import React from "react";
import { useState } from "react";
import transaction from "../assets/transaction.png";
import logo from "../assets/payfi-logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import FileUpload from "../utils/FileUpload";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const saveUserData = async (event) => {
    event.preventDefault();
    try {
      var person = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post("http://localhost:8081/merchants/signup", person);
    } catch (error) {
      setFieldErrors({ ...error.response.data });
      console.log(error.response.data);
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFieldErrors({ ...fieldErrors, firstName: "" });
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setFieldErrors({ ...fieldErrors, lastName: "" });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setFieldErrors({ ...fieldErrors, email: "" });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setFieldErrors({ ...fieldErrors, password: "" });
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
              <div className=" flex text-white py-1 text-sm">
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

          <div className="w-full lg:w-8/12 bg-white  dark:bg-gray-700 p-5 rounded-lg ">
            <h3
              className="py-4 font-extrabold text-2xl text-center text-gray-800 dark:text-white"
              // style={{ fontFamily: }}
            >
              Create Account!
            </h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
              <div className="mb-4 md:flex">
                <div className="mb-4 md:mr-1 md:mb-0" style={{ flex: 1 }}>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight border border-black rounded  appearance-none"
                    id="firstName"
                    type="text"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                  <div className="text-red-500 text-sm mt-1">
                    {fieldErrors.firstName}
                  </div>
                </div>
                <div className="md:ml-1" style={{ flex: 1 }}>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight border border-black rounded appearance-none"
                    id="lastName"
                    type="text"
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                  <div className="text-red-500 text-sm mt-1">
                    {fieldErrors.lastName}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 text-sm leading-tight border border-black rounded appearance-none"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="text-red-500 text-sm mt-1">
                  {fieldErrors.email}
                </div>
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight border border-black rounded appearance-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="text-red-500 text-sm mt-1">
                  {fieldErrors.password}
                </div>
              </div>

              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-[#6a5acd] rounded dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={saveUserData}
                >
                  Create Account
                </button>
              </div>

              <div className="text-center">
                <span className="text-[#6d6d6d]">Already have an account?</span>
                <Link
                  className="inline-block text-base text-[#6a5acd] align-baseline ml-2 hover:text-blue-800"
                  to="/"
                >
                  Login!
                </Link>
              </div>
              <div className="flex flex-col md:flex-row justify-center mt-10 gap-3">
                <div className="flex items-center justify-center dark:bg-gray-800">
                  <button className="w-full md:w-auto px-4 py-2 border flex gap-2 border-slate-500 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                    <img
                      className="w-6 h-6"
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      loading="lazy"
                      alt="google logo"
                    />
                    <span className="text-sm">Sign up with Google</span>
                  </button>
                </div>

                <div className="flex items-center justify-center dark:bg-gray-800">
                  <button className="w-full md:w-auto px-4 py-2 border flex gap-2 border-slate-500 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                    <img
                      className="w-6 h-6"
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Facebook_F_icon.svg"
                      loading="lazy"
                      alt="facebook logo"
                    />
                    <span className="text-sm">Sign up with Facebook</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
