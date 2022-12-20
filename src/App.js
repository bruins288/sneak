import React from "react";

import Card from "./components/Card";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imgUrl: "/img/sneaks/1.jpg",
  },
  {
    title: "Мужские Кроссовки Air Max 270",
    price: 15600,
    imgUrl: "/img/sneaks/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imgUrl: "/img/sneaks/3.jpg",
  },
  {
    title: "Мужские Кроссовки Aka Boku Future Rider",
    price: 8999,
    imgUrl: "/img/sneaks/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <main className="content">
        <div className="content__center">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="content__goods">
          {arr.map((element) => (
            <Card
              title={element.title}
              price={element.price}
              imgUrl={element.imgUrl}
              onClick={() => console.log(element)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
