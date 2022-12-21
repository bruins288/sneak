import React from "react";

function Drawer({ onClosedCart, removeGoodOnCart, goodsOnCart = [] }) {
  const handlerRemoveGood = (number) => {
    removeGoodOnCart(goodsOnCart.filter((_, index) => index !== number));
  };
  return (
    <aside className="overlay">
      <div className="overlay__drawer">
        <h2>
          Корзина
          <img src="/img/delete.svg" alt="Remove" onClick={onClosedCart} />
        </h2>
        <div className="cart">
          {goodsOnCart.map((good, index) => (
            <div className="cart__item" key={index}>
              <img src={good.imgUrl} alt="sneak" width={90} height={70} />
              <div className="cart__item__info">
                <p>{good.title}</p>
                <strong>{good.price} руб.</strong>
              </div>
              <img
                src="/img/delete.svg"
                alt="Remove"
                onClick={() => handlerRemoveGood(index)}
              />
            </div>
          ))}
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
  );
}

export default Drawer;
