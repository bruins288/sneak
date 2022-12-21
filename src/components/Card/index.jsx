import React from "react";

import classes from "./Card.module.scss";

function Card({ title, price, imgUrl, onAddCart }) {
  const [isAddedCart, setIsAddedCart] = React.useState(false);
  const [isAddedFavorite, setIsAddedFavorite] = React.useState(false);

  const handleAddedCart = () => {
    if (!isAddedCart) onAddCart({ title, price, imgUrl });
    setIsAddedCart(!isAddedCart);
  };
  const handleAddedFavorite = () => {
    setIsAddedFavorite(!isAddedFavorite);
  };

  return (
    <div className={classes.card}>
      <div className={classes.favorite}>
        <img
          src={!isAddedFavorite ? "/img/heart.svg" : "/img/heart-fill.svg"}
          alt="heart"
          onClick={handleAddedFavorite}
        />
      </div>
      <img src={imgUrl} alt="sneak" width={133} height={112} />
      <h5>{title}</h5>
      <div className={classes.info}>
        <div className={classes.cost}>
          <span>Цена:</span>
          <strong>{price} руб.</strong>
        </div>
        <img
          src={!isAddedCart ? "/img/add.svg" : "/img/added.svg"}
          alt="add"
          width={20}
          height={20}
          onClick={handleAddedCart}
        />
      </div>
    </div>
  );
}

export default Card;
