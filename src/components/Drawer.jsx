import React from "react";

import Info from "./Info";

function Drawer({
  onClosedCart,
  onAddOrders,
  removeItem,
  totalPrice,
  isLoading,
  itemsInCart = [],
}) {
  const [completedOrder, SetCompletedOrder] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const onClickOrder = async () => {
    let { id } = await onAddOrders(itemsInCart);
    setOrderId(id);
    SetCompletedOrder(true);
  };

  return (
    <aside className="overlay">
      <div className="overlay__drawer">
        <h2>
          Корзина
          <img src="/img/delete.svg" alt="Remove" onClick={onClosedCart} />
        </h2>
        <div className="cart">
          {itemsInCart.length === 0 ? (
            <Info
              image={
                !completedOrder
                  ? "/img/cartempty.png"
                  : "/img/orderCompleted.jpg"
              }
              title={!completedOrder ? "Корзина пуста" : "Заказ оформлен"}
              description={
                !completedOrder
                  ? "нет заказанных товаров"
                  : `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
              }
              onClosedCart={onClosedCart}
            />
          ) : (
            itemsInCart.map((item) => (
              <div className="cart__item" key={item.id}>
                <img src={item.imgUrl} alt="sneak" width={90} height={70} />
                <div className="cart__item__info">
                  <p>{item.title}</p>
                  <strong>{item.price} руб.</strong>
                </div>
                <img
                  src="/img/delete.svg"
                  alt="Remove"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            ))
          )}
        </div>
        {itemsInCart.length !== 0 && (
          <div className="summer">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <strong>{totalPrice} руб.</strong>
              </li>
              <li>
                <span>Налог 20%:</span>
                <div></div>
                <strong>{((totalPrice / 100) * 20).toFixed(2)} руб.</strong>
              </li>
            </ul>
            <button
              disabled={isLoading}
              className="green-button"
              onClick={onClickOrder}
            >
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
