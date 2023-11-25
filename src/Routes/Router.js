import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Registration from "../screens/Registration";
import Submenu from "../screens/Submenu";
import PaymentGateway from "../screens/PaymentGateway";
import Transaction from "../screens/Transaction";
import Emailpage from "../screens/Emailpage";
import Canceltrans from "../screens/Canceltrans";
import ActiveMerchants from "../screens/ActiveMerchants";
import SuspendedMerchants from "../screens/SuspendedMerchants";
import ClosedMerchants from "../screens/ClosedMerchants";
import UnregisteredMerchants from "../screens/UnregisteredMerchants";
// Routers
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/submenu" element={<Submenu />} />
          <Route path="/paymentGateway" element={<PaymentGateway />} />
          <Route path="/emailpage" element={<Emailpage />} />
          <Route
            path="/:submenurl"
            element={<Transaction title=":/submenurl" />}
          />
          <Route path="/" element={<Dashboard />} />
          <Route path="/cancelled" element={<Canceltrans />} />
          <Route path="/activemerchants" element={<ActiveMerchants />} />
          <Route path="/suspendedmerchants" element={<SuspendedMerchants />} />
          <Route path="/closedmerchants" element={<ClosedMerchants />} />
          <Route path="/unregisteredmerchants" element={<UnregisteredMerchants />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
