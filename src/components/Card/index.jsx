import React from "react";

import classes from "./Card.module.scss";

function Card({
  id,
  title,
  price,
  imgUrl,
  addCart,
  addFavorite,
  removeFavorite,
  isFavorite = false,
}) {
  const [isAddedCart, setIsAddedCart] = React.useState(false);
  const [isAddedFavorite, setIsAddedFavorite] = React.useState(isFavorite);

  const handleAddedCart = (id) => {
    if (!isAddedCart) addCart({ title, price, imgUrl, goodId: id });
    setIsAddedCart(!isAddedCart);
  };
  const handleRemoveFavorite = (id) => {
    if (!isAddedFavorite) addFavorite({ title, price, imgUrl, goodId: id });
    setIsAddedFavorite(!isAddedFavorite);
  };

  return (
    <div className={classes.card}>
      <div className={classes.favorite}>
        <img
          src={!isAddedFavorite ? "/img/heart.svg" : "/img/heart-fill.svg"}
          alt="heart"
          onClick={() => handleRemoveFavorite(id)}
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
          onClick={() => handleAddedCart(id)}
        />
      </div>
    </div>
  );
}

export default Card;
