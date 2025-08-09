import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Coupons from "./pages/Coupons";
import Concerns from "./pages/Concerns";
import ReferralWallet from "./pages/ReferralWallet";
import Refund from "./pages/Refund";
import Specialties from "./pages/Specialties"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="products/list" element={<ProductList />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="coupons" element={<Coupons />} />
        <Route path="concerns" element={<Concerns />} />
        <Route path="referral-wallet" element={<ReferralWallet />} />
        <Route path="refunds" element={<Refund />} />
        <Route path="specialties" element={<Specialties />} />
      </Route>
    </Routes>
  );
};

export default App;
