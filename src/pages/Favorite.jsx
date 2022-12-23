import React from "react";

import Card from "../components/Card";

function Favorite({ goodsFavorite, onAddFavorite, onRemove }) {
  return (
    <main className="content">
      <div className="content__center">
        <h1>Мои закладки</h1>
      </div>
      <div className="content__goods">
        {goodsFavorite.map((element) => (
          <Card
            key={element.id}
            id={element.id}
            title={element.title}
            price={element.price}
            imgUrl={element.imgUrl}
            isFavorite={true}
            addFavorite={onAddFavorite}
            removeFavorite={onRemove}
          />
        ))}
      </div>
    </main>
  );
}

export default Favorite;
