import React from "react";

function App() {
  return (
    <div className="wrapper">
      <aside className="overlay" style={{ display: "none" }}>
        <div className="overlay__drawer">
          <h2>
            Корзина <img src="/img/delete.svg" alt="Remove" />
          </h2>
          <div className="cart">
            <div className="cart__item">
              <img src="/img/sneaks/1.jpg" alt="sneak" width={70} height={70} />
              <div className="cart__item__info">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <strong>12 999 руб.</strong>
              </div>
              <img src="/img/delete.svg" alt="Remove" />
            </div>
          </div>
          <div className="cart__summer">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <strong>21 498 руб.</strong>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <strong>1074 руб.</strong>
              </li>
            </ul>
            <button>
              Оформить заказ
              <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </aside>
      <header>
        <div className="header-left">
          <img src="/img/logo.png" alt="logo" width={40} height={40} />
          <div>
            <h3>React Sneak</h3>
            <p>Магазин кроссовок</p>
          </div>
        </div>
        <ul className="header-right">
          <li className="header-right__info">
            <img src="/img/cart.svg" alt="cart" width={20} height={18} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" alt="user" width={20} height={20} />
          </li>
        </ul>
      </header>
      <main className="content">
        <div className="content__center">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="content__goods">
          <div className="card">
            <div className="card__favorite">
              <img src="/img/heart.svg" alt="heart" />
            </div>
            <img src="/img/sneaks/1.jpg" alt="sneak" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__info">
              <div className="card__cost">
                <span>Цена:</span>
                <strong>12 999 руб.</strong>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" width={15} height={15} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
