import React from "react";
import Nav from "./Navbar";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <Nav />
      <div className="container mx-auto p-4 px-20">
        <div className="flex justify-center">
          <h1 className="text-3xl text-[#6a5acd] font-bold py-4 pb-8">Create New Merchant</h1>
        </div>
        <form>
          <div className="flex w-full justify-between">
            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field1">Gateway ID</label>
              <input
                type="text"
                id="field1"
                name="field1"
                className="w-full py-1 border border-black rounded"
              />
            </div>

            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field2">Wire Fee</label>
              <input
                type="text"
                id="field2"
                name="field2"
                className="w-full py-1 border border-black rounded"
              />
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field1">Withdraw Min. Amt.</label>
              <input
                type="text"
                id="field1"
                name="field1"
                className="w-full py-1 border border-black rounded"
              />
            </div>

            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field2">Monthly Fee</label>
              <input
                type="text"
                id="field2"
                name="field2"
                className="w-full py-1 border border-black rounded"
              />
            </div>
          </div>

          <div className="flex justify-between w-full">
            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field5">Withdraw Max. Amt.</label>
              <input
                type="text"
                id="field5"
                name="field5"
                className="w-full py-1 border border-black rounded"
              />
            </div>

            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field5">Frozen Balance</label>
              <div className="flex w-full">
                <input
                  type="text"
                  id="field5"
                  name="field5"
                  className="w-[70%] py-1 border border-black rounded-l"
                />
                <button className="w-[30%] border border-black rounded-r  bg-gray-300">
                  % of Rolling Balance
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full">
            <div className="mb-4 w-[25%] mx-2">
              <label htmlFor="field9">Soft POS</label>
              <select
                id="field9"
                name="field9"
                className="w-full py-1 border border-black rounded"
              >
                {/* Add options for Soft POS */}
              </select>
            </div>

            <div className="mb-4 w-[25%] mx-2">
              <label htmlFor="field10">Request Funds</label>
              <select
                id="field10"
                name="field10"
                className="w-full py-1 border border-black rounded"
              >
                {/* Add options for Request Funds */}
              </select>
            </div>

            <div className="mb-4 w-[25%] mx-2">
              <label htmlFor="field11">Moto</label>
              <select
                id="field11"
                name="field11"
                className="w-full py-1 border border-black rounded"
              >
                {/* Add options for Moto */}
              </select>
            </div>

            <div className="mb-4 w-[25%] mx-2">
              <label htmlFor="field12">Payout Gateway</label>
              <select
                id="field12"
                name="field12"
                className="w-full py-1 border border-black rounded"
              >
                {/* Add options for Gateway Payout */}
              </select>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field7">
                Username:
                <span className="text-red-500 font-bold -ml-1">*</span>
              </label>
              <input
                type="text"
                id="field7"
                name="field7"
                className="w-full py-1 border border-black rounded"
              />
            </div>

            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field13">
                Primary Email Address:
                <span className="text-red-500 font-bold -ml-1">*</span>
              </label>
              <input
                type="text"
                id="field8"
                name="field8"
                className="w-full py-1 border border-black rounded"
              />
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field13">
                Profile Status:
                <span className="text-red-500 font-bold -ml-1">*</span>
              </label>
              <input
                type="text"
                id="field9"
                name="field9"
                className="w-full py-1 border border-black rounded"
              />
            </div>

            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field13">
                Account Currency:
                <span className="text-red-500 font-bold -ml-1">*</span>
              </label>
              <input
                type="text"
                id="field10"
                name="field10"
                className="w-full py-1 border border-black rounded"
              />
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field14">
                Merchant's Name:
                <span className="text-red-500 font-bold -ml-1">*</span>
              </label>
              <input
                type="text"
                id="field14"
                name="field14"
                className="w-full py-1 border border-black rounded"
              />
            </div>

            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field26">
                Designation:
                <span className="text-red-500 font-bold -ml-1">*</span>
              </label>
              <input
                type="text"
                id="field26"
                name="field26"
                className="w-full py-1 border border-black rounded"
              />
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field26">
                Merchant's Contact:
                <span className="text-red-500 font-bold -ml-1">*</span>
              </label>
              <input
                type="text"
                id="field26"
                name="field26"
                className="w-full py-1 border border-black rounded"
              />
            </div>

            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field26">Merchant's IM'S</label>
              <input
                type="text"
                id="field26"
                name="field26"
                className="w-full py-1 border border-black rounded"
              />
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field26">
                Business Name:
                <span className="text-red-500 font-bold -ml-1">*</span>
              </label>
              <input
                type="text"
                id="field26"
                name="field26"
                className="w-full py-1 border border-black rounded"
              />
            </div>

            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field26">
                Business Address:
                <span className="text-red-500 font-bold -ml-1">*</span>
              </label>
              <input
                type="text"
                id="field26"
                name="field26"
                className="w-full py-1 border border-black rounded"
              />
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field26">
                Business Contact:
                <span className="text-red-500 font-bold -ml-1">*</span>
              </label>
              <input
                type="text"
                id="field26"
                name="field26"
                className="w-full py-1 border border-black rounded"
              />
            </div>

            <div className="mb-4 w-[50%] mx-2">
              <label htmlFor="field26">Business IM'S</label>
              <input
                type="text"
                id="field26"
                name="field26"
                className="w-full py-1 border border-black rounded"
              />
            </div>
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="field26">Add New Description</label>
            <textarea
              type="text"
              id="field26"
              name="field26"
              className="w-full py-1 border border-black rounded"
            />
          </div>

          <div className="flex justify-center">
            <div className="p-4">
              <button
                type="submit"
                className="bg-[#6A5ACD] text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>

            <div className="p-4">
              <Link to='/dashboard'>
                <button
                  type="submit"
                  className="bg-[#6A5ACD] text-white py-2 px-4 rounded"
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
