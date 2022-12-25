import React from "react";
import { BrowserRouter } from "react-router-dom";

import ProductsApi from "./api/ProductsApi.js";
import AppContext from "./context.js";
import AppRoutes from "./components/AppRoutes.js";

function App() {
  const [products, setProducts] = React.useState([]);
  const [productsInCart, setProductsInCart] = React.useState([]);
  const [productsInFavorite, setProductsInFavorite] = React.useState([]);
  const [isLoading, SetIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      let responseCart = await ProductsApi.getCart();
      let responseFavorite = await ProductsApi.getFavorites();
      let responseProducts = await ProductsApi.getProducts();
      SetIsLoading(false);
      setProductsInCart(responseCart.data);
      setProductsInFavorite(responseFavorite.data);
      setProducts(responseProducts.data);
    })();
  }, []);

  const onAddItemCart = async (item) => {
    try {
      let response = await ProductsApi.addItemCart(item);
      setProductsInCart((prev) => [...prev, response.data]);
    } catch (error) {
      window.alert("Не удалось добавить товар в корзину!");
      console.error(error.message);
    }
  };
  const onRemoveItemCart = async (id) => {
    let newCart = [];
    try {
      let itemCart = productsInCart.find((item) => item.productId === id);
      if (itemCart) {
        await ProductsApi.deleteItemCart(itemCart.id);
        newCart = productsInCart.filter((item) => item.id !== itemCart.id);
      } else {
        await ProductsApi.deleteItemCart(id);
        newCart = productsInCart.filter((item) => item.id !== id);
      }

      setProductsInCart(newCart);
    } catch (error) {
      window.alert("Не удалось удалить товар из корзины!");
      console.error(error.message);
    }
  };
  const onAddItemFavorite = async (item) => {
    try {
      let response = await ProductsApi.addItemFavorite(item);
      setProductsInFavorite((prev) => [...prev, response.data]);
    } catch (error) {
      window.alert("Не удалось добавить товар в закладку");
      console.error(error.message);
    }
  };
  const onRemoveItemFavorite = async (id) => {
    let newFavorite = [];
    try {
      let itemFavorite = productsInFavorite.find(
        (item) => item.productId === id
      );
      if (itemFavorite) {
        await ProductsApi.deleteItemFavorite(itemFavorite.id);
        newFavorite = productsInFavorite.filter(
          (item) => item.id !== itemFavorite.id
        );
      } else {
        await ProductsApi.deleteItemFavorite(id);
        newFavorite = productsInFavorite.filter((item) => item.id !== id);
      }
      setProductsInFavorite(newFavorite);
    } catch (error) {
      window.alert("Не удалось удалить товар из закладки");
      console.error(error.message);
    }
  };
  const isItemInAdded = (id, items) => {
    return items.some((item) => item.productId === id);
  };

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          products,
          productsInCart,
          productsInFavorite,
          onAddItemCart,
          onRemoveItemCart,
          onAddItemFavorite,
          onRemoveItemFavorite,
          isItemInAdded,
          isLoading,
        }}
      >
        <AppRoutes />
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
