import React from "react";

import Card from "../components/Card";
import ProductsApi from "../api/ProductsApi.js";

function Order() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await ProductsApi.getOrders();
        setOrders(data.reduce((acc, cur) => [...acc, ...cur.order], []));
      } catch (error) {
        window.alert("Не удалось получить перечень покупок");
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <main className="content">
      <div className="content__center">
        <h1>Мои покупки</h1>
      </div>
      {orders.length === 0 && <p>Нет заказов</p>}
      <div className="content__goods">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} isLoading={isLoading} {...item} disabled />
        ))}
      </div>
    </main>
  );
}

export default Order;
