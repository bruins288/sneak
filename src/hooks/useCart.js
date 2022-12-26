import React from "react";

import AppContext from "../context.js";

export const useCart = () => {
  const { productsInCart, onAddItemsOrders, onRemoveItemCart, isLoading } =
    React.useContext(AppContext);
  const totalPrice = productsInCart.reduce(
    (sum, product) => product.price + sum,
    0
  );
  return {
    productsInCart,
    onAddItemsOrders,
    onRemoveItemCart,
    totalPrice,
    isLoading,
  };
};
