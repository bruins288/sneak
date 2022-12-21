import React from "react";

import Card from "./components/Card";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";

import goodsApi from "./api/GoodsApi.js";

function App() {
  const [goods, setGoods] = React.useState([]);
  const [isCartOpened, setIsCartOpened] = React.useState(false);
  const [goodsOnCart, setGoodsOnCart] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let response = await goodsApi.getGoods();
      setGoods(response.data);
    })();
  }, []);

  return (
    <div className="wrapper">
      {isCartOpened && (
        <Drawer
          goodsOnCart={goodsOnCart}
          onClosedCart={() => setIsCartOpened(!isCartOpened)}
          removeGoodOnCart={(goods) => setGoodsOnCart(goods)}
        />
      )}
      <Header onOpenedCart={() => setIsCartOpened(!isCartOpened)} />
      <main className="content">
        <div className="content__center">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="content__goods">
          {goods.map((element, index) => (
            <Card
              key={index}
              title={element.title}
              price={element.price}
              imgUrl={element.imgUrl}
              onAddCart={(good) => setGoodsOnCart(() => [...goodsOnCart, good])}
              onAddFavorite={() => console.log("Добавили в закладки")}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
