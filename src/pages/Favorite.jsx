import React from "react";

import Card from "../components/Card";

function Favorite({ goodsFavorite, onRemove, onAddCart }) {
  return (
    <main className="content">
      <div className="content__center">
        <h1>Мои закладки</h1>
      </div>
      <div className="content__goods">
        {goodsFavorite.map((element) => (
          <Card
            key={element.id}
            isFavorite={true}
            removeFavorite={onRemove}
            addCart={onAddCart}
            {...element}
          />
        ))}
      </div>
    </main>
  );
}

export default Favorite;
