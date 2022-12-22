import React from "react";

function Drawer({ onClosedCart, removeGood, goodsOnCart = [] }) {
  return (
    <aside className="overlay">
      <div className="overlay__drawer">
        <h2>
          Корзина
          <img src="/img/delete.svg" alt="Remove" onClick={onClosedCart} />
        </h2>
        <div className="cart">
          {goodsOnCart.length === 0 ? (
            <div className="cart__empty">
              <img
                src="/img/cartempty.png"
                alt="empty"
                width={120}
                height={120}
              />
              <h3>Заказов нет</h3>
            </div>
          ) : (
            goodsOnCart.map((good) => (
              <div className="cart__item" key={good.id}>
                <img src={good.imgUrl} alt="sneak" width={90} height={70} />
                <div className="cart__item__info">
                  <p>{good.title}</p>
                  <strong>{good.price} руб.</strong>
                </div>
                <img
                  src="/img/delete.svg"
                  alt="Remove"
                  onClick={() => removeGood(good.id)}
                />
              </div>
            ))
          )}
        </div>
        {goodsOnCart.length !== 0 && (
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
            <button className="green-button">
              Оформить заказ
              <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Drawer;
