import React from "react";

import Card from "../components/Card";
import AppContext from "../context.js";

function Favorite() {
  const state = React.useContext(AppContext);

  return (
    <main className="content">
      <div className="content__center">
        <h1>Мои закладки</h1>
      </div>
      {state.productsInFavorite.length === 0 && <p>Нет закладок</p>}
      <div className="content__goods">
        {(state.isLoading ? [...Array(4)] : state.productsInFavorite).map(
          (item, index) => (
            <Card
              key={index}
              isLoading={state.isLoading}
              isFavorite={true}
              {...item}
            />
          )
        )}
      </div>
    </main>
  );
}

export default Favorite;
