import React from "react";
import { Link } from "react-router-dom";

function Header({ totalPrice, onOpenedCart }) {
  return (
    <header>
      <Link to="/">
        <div className="header-left">
          <img src="/img/logo.png" alt="logo" width={40} height={40} />
          <div>
            <h3>React Sneak</h3>
            <p>Магазин кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="header-right">
        <li className="header-right__info">
          <img
            src="/img/cart.svg"
            alt="Корзина"
            width={20}
            height={18}
            onClick={onOpenedCart}
          />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorite">
            <img
              src="/img/headFavorite.svg"
              alt="Закладки"
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link to="/order">
            <img
              src="/img/user.svg"
              alt="Пользователь"
              width={20}
              height={20}
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
