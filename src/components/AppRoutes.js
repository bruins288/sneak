import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";

import goodsApi from "../api/GoodsApi";

function AppRoutes() {
  const [goods, setGoods] = React.useState([]);
  const [goodsOnCart, setGoodsOnCart] = React.useState([]);
  const [goodsFavorite, setGoodsFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    (async () => {
      let response = await goodsApi.getGoods();
      setGoods(response.data);
    })();
    (async () => {
      let response = await goodsApi.getCart();
      setGoodsOnCart(response.data);
    })();
    (async () => {
      let response = await goodsApi.getFavorite();
      setGoodsFavorite(response.data);
    })();
  }, []);

  const onAddCart = async (good) => {
    if (!goodsOnCart.find((item) => item.goodId === good.goodId)) {
      try {
        let response = await goodsApi.postAddCart(good);
        setGoodsOnCart((prev) => [...prev, response.data]);
      } catch (error) {
        window.alert("Не удалось добавить товар в корзину!");
        console.error(error);
      }
    } else {
      window.alert("Такой товар уже в корзине");
    }
  };
  const onRemoveGoodCart = async (id) => {
    try {
      await goodsApi.deleteGoodCart(id);
      let newCart = goodsOnCart.filter((good) => good.id !== id);
      setGoodsOnCart(newCart);
    } catch (error) {
      window.alert("Не удалось удалить товар из корзины!");
      console.error(error);
    }
  };
  const onAddFavorite = async (good) => {
    if (!goodsFavorite.find((item) => item.goodId === good.goodId)) {
      try {
        let response = await goodsApi.postAddFavorite(good);
        setGoodsFavorite((prev) => [...prev, response.data]);
      } catch (error) {
        window.alert("Не удалось добавить закладку");
        console.error(error);
      }
    } else {
      window.alert("Такой товар уже в закладках");
    }
  };
  const onRemoveFavorite = async (id) => {
    try {
      await goodsApi.deleteFavorite(id);
      let newFavorite = goodsFavorite.filter((favorite) => favorite.id !== id);
      setGoodsFavorite(newFavorite);
    } catch (error) {
      window.alert("Не удалось удалить товар из закладки");
      console.error(error);
    }
  };
  const changeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            goodsOnCart={goodsOnCart}
            onRemoveGoodCart={onRemoveGoodCart}
          />
        }
      >
        <Route
          index
          element={
            <Home
              goods={goods}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              changeSearchInput={changeSearchInput}
              onAddCart={onAddCart}
              onAddFavorite={onAddFavorite}
              onRemove={onRemoveFavorite}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              goodsFavorite={goodsFavorite}
              onAddFavorite={onAddFavorite}
              onAddCart={onAddCart}
              onRemove={onRemoveFavorite}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
