import React from "react";
import { Outlet } from "react-router-dom";

import Drawer from "./Drawer.jsx";
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
      {isCartOpened && (
        <Drawer
          itemsInCart={productsInCart}
          onAddOrders={onAddItemsOrders}
          totalPrice={totalPrice}
          onClosedCart={() => setIsCartOpened(!isCartOpened)}
          removeItem={onRemoveItemCart}
          isLoading={isLoading}
        />
      )}
      <Header
        onOpenedCart={() => setIsCartOpened(!isCartOpened)}
        totalPrice={totalPrice}
      />
      <Outlet />
    </div>
  );
}

export default Layout;
