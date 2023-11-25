import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Nav from "../screens/Navbar";
// import Nav from "./Navbar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// import DropdownMenu from "../utils/DropdownMenu";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const toggleNavbar = () =>
  //   setIsOpen(!isOpen);
  // };

  const data = [
    {
      id: 1,
      text: "Dashboard",
      img: "https://www.reactnative.express/static/logo.png",
      title: "Dashboard",
      content: ["Dashboard"],
    },
    {
      id: 10,
      text: "Transaction",
      img: "https://www.reactnative.express/static/logo.png",
      title: "Transaction",
      content: [
        "AllTransaction",
        "Approved",
        "Cancelled",
        "Chargeback",
        "Expired",
        "Declined",
        "Failed",
        "Frozen",
        "Frozen",
        "Partial",
        "Pending",
        "Predispute",
        "Refund",
        "Refund",
      ],
    },
    {
      id: 2,
      text: "Merchant",
      img: "https://www.reactnative.express/static/logo.png",
      title: "Merchant",
      content: [
        "Active",
        "Suspend",
        "Closed",
        "Sub-merchant",
        "Un-Register",
        "Add New",
      ],
    },
    {
      id: 3,
      text: "Sub Admin",
      img: "https://www.reactnative.express/static/logo.png",
      title: "Sub Admin",
      content: [
        "Add sub Admin",
        "Sub Admin List",
        "Create Roles",
        "Roles List",
      ],
    },
    {
      id: 4,
      text: "Email",
      img: "https://www.reactnative.express/static/logo.png",
      title: "Email",
      content: ["All-Email", "Success", "Failed"],
    },
    {
      id: 5,
      text: "Notification",
      img: "https://www.reactnative.express/static/logo.png",
      title: "Notification",
      content: ["Notification"],
    },
    {
      id: 6,
      text: "Bank Details",
      img: "https://www.reactnative.express/static/logo.png",
      title: "Bank Details",
      content: [""],
    },
    {
      id: 7,
      text: "Aquirer",
      img: "https://www.reactnative.express/static/logo.png",
      title: "Aquirer",
      content: [""],
    },
    {
      id: 8,
      text: "Glossary",
      img: "https://www.reactnative.express/static/logo.png",
      title: "Glossary",
      content: [""],
    },
    {
      id: 9,
      text: "Supports",
      img: "https://www.reactnative.express/static/logo.png",
      title: "Supports",
      content: [""],
    },
  ];
  return (
    <div className="h-11 w-26 text-[#3B8894] text-xl m-auto p- 4">
      <Nav />
      <div className="flex justify-center py-3 ">
        <h1 className="font-bold text-3xl">Payfi Dashboard</h1>
      </div>
      <div className=" h-5 w-13 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((entry, idx) => {
          return (
            <div
              className=" flex flex-column md:p-6 lg:p-8 justify-around items-between"
              key={idx}
            >
              <div className="relative border border-gray-400 rounded-lg p-4 group">
                <p>{entry.text}</p>
                <img className="h-18 w-16" src={entry.img} alt="image src" />
                <div className="container mx-auto p-4 absolute hidden z-50  bg-white border rounded-lg shadow-md mt-2 py-2 w-32 group-hover:block">
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {entry.content.map((status, statusIdx) => (
                      <li
                        key={statusIdx}
                        style={{ marginBottom: "px", fontSize: "px" }}
                      >
                        <a
                          href="#"
                          className="block w-2 px-1 py-1 text-gray-700 text-base hover-bg-gray-200 text-sm"
                        >
                          <Link to={`/${status.toLowerCase()}`}>{status}</Link>
                          {/* <Link to="/:submenu">
                            {status}
                          </Link> */}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
