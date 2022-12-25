import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "../pages/Home.jsx";
import Favorite from "../pages/Favorite.jsx";
import Order from "../pages/Order.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
