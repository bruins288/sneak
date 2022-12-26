import React from "react";
import { Outlet } from "react-router-dom";

import Drawer from "./Drawer";
import Header from "./Header.jsx";

import { useCart } from "../hooks/useCart.js";

function Layout() {
  const [isCartOpened, setIsCartOpened] = React.useState(false);
  const {
    productsInCart,
    onAddItemsOrders,
    onRemoveItemCart,
    totalPrice,
    isLoading,
  } = useCart();
  return (
    <div className="wrapper">
      <Drawer
        itemsInCart={productsInCart}
        onAddOrders={onAddItemsOrders}
        totalPrice={totalPrice}
        onClosedCart={() => setIsCartOpened(!isCartOpened)}
        removeItem={onRemoveItemCart}
        isLoading={isLoading}
        isCartOpened={isCartOpened}
      />

      <Header
        onOpenedCart={() => setIsCartOpened(!isCartOpened)}
        totalPrice={totalPrice}
      />
      <Outlet />
    </div>
  );
}

export default Layout;
