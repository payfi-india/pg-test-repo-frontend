import React, { useState } from "react";
import { useParams } from "react-router";
import Sidebars from "./Sidebars";
import Submenu from "./Submenu";
import { Card, Typography } from "@material-tailwind/react";
import Navbar from "./Navbar";

const Transaction = () => {
  const { submenurl } = useParams();

  const TABLE_HEADING = [
    {
      big_heading: "TransID",
      small_heading: "Reference",
    },
    {
      big_heading: "Action",
      small_heading: "",
    },
    {
      big_heading: "Bearer Token",
      small_heading: "Full Name",
    },
    {
      big_heading: "Trans Amt",
      small_heading: "",
    },
    {
      big_heading: "Available Balance",
      small_heading: "",
    },
    {
      big_heading: "Timestamp",
      small_heading: "MOP",
    },
    {
      big_heading: "Username",
      small_heading: "",
    },
    {
      big_heading: "Acquirer Response",
      small_heading: "JSON Value",
    },
    {
      big_heading: "Bill Currency",
      small_heading: "Note Merchant",
    },
    {
      big_heading: "Support Note",
      small_heading: "CCNo",
    },
    {
      big_heading: "Source Url",
      small_heading: "Webhook Url",
    },
  ];

  const TABLE_ROWS = [
    {
      transaction_id: 45654,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 76874,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 64536,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 96754,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 24576,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 546354,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 9756453,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 168455555,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 76598,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 9086,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 257456,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 78453,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 45765,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
    {
      transaction_id: 657654,
      action: "download",
      bearer_token: "Test Name",
      transaction_amount: "$0.00",
      available_balance: "$0.00",
      timastamp: "10/11/2023 14:09",
      username: "XYZ",
      acquirer_response: "json value",
      bill_currency: "USD",
      support_note: "XXXXXXXXXXXX2931",
      source_url: "www.payfi.co.in",
    },
  ];

  const ITEMS_PER_PAGE = 10; // Adjust the number of items per page as needed
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = TABLE_ROWS.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  const paginatedRows = TABLE_ROWS.slice(startIndex, endIndex);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <h1 className="text-3xl text-[#6a5acd] font-bold py-4">All Transactions</h1>
      </div>
      <div className="flex">
        <Submenu />
        <div>{/* <p> {submenurl}</p>  */}</div>
        {/* <div className="flex justify-center">
        <h1 className="font-bold text-2xl py-6">All Transactions</h1>
      </div> */}
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full h-full min-w-max table-auto text-left">
            <thead>
              <tr className="">
                {TABLE_HEADING.map((head) => (
                  <th
                    key={head}
                    className="border-b  border-t border-blue-gray-100  bg-gray-300 px-4 py-6"
                  >
                    <div className="flex">
                      <Typography
                        variant="large"
                        color="black"
                        className="font-bold leading-none opacity-70"
                      >
                        {head.big_heading}
                      </Typography>
                    </div>

                    <div className="flex">
                      <Typography
                        variant="small"
                        color="black"
                        className="font-normal leading-none opacity-70 py-1"
                      >
                        {head.small_heading}
                      </Typography>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            {paginatedRows.map(
              (
                {
                  transaction_id,
                  action,
                  bearer_token,
                  transaction_amount,
                  available_balance,
                  timastamp,
                  username,
                  acquirer_response,
                  bill_currency,
                  support_note,
                  source_url,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4 border-b"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={transaction_id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className=" font-black text-purple-700"
                      >
                        {transaction_id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {action}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {bearer_token}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-semibold text-green-600"
                      >
                        {transaction_amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {available_balance}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {timastamp}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {username}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {acquirer_response}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {bill_currency}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {support_note}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {source_url}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </table>
          <div className="flex justify-end p-4">
            <button
              className="bg-[#6A5ACD] text-white p-2 rounded mr-2"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="bg-[#6A5ACD] text-white p-2 rounded"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Transaction;
