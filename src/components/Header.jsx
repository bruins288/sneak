import React from "react";

function Header(props) {
  return (
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
          <img
            src="/img/cart.svg"
            alt="cart"
            width={20}
            height={18}
            onClick={props.onOpenedCart}
          />
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="/img/user.svg" alt="user" width={20} height={20} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
