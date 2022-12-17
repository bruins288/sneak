import React from "react";

import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";

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
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
