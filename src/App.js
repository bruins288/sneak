import React from "react";

function App() {
  return (
    <div className="wrapper">
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
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="content__goods">
          <div className="card">
            <img
              src="/img/sneaks/1.jpg"
              alt="Blazer Mid Suede"
              width={133}
              height={112}
            />
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
          <div className="card">
            <img
              src="/img/sneaks/2.jpg"
              alt="Blazer Mid Suede"
              width={133}
              height={112}
            />
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
          <div className="card">
            <img
              src="/img/sneaks/3.jpg"
              alt="Blazer Mid Suede"
              width={133}
              height={112}
            />
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
          <div className="card">
            <img
              src="/img/sneaks/4.jpg"
              alt="Blazer Mid Suede"
              width={133}
              height={112}
            />
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
      </div>
    </div>
  );
}

export default App;
