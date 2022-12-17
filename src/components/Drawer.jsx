import React from "react";

function Drawer() {
  return (
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
  );
}

export default Drawer;
