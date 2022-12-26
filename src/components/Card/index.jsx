import React from "react";
import ContentLoader from "react-content-loader";

import AppContext from "../../context.js";
import classes from "./Card.module.scss";

function Card({ id, title, price, imgUrl, isLoading, isFavorite, disabled }) {
  const state = React.useContext(AppContext);

  const hasInCart = state.isItemInAdded(id, state.productsInCart);

  const hasInFavorite =
    isFavorite || state.isItemInAdded(id, state.productsInFavorite);

  const handleAddedCart = (id) => {
    if (!hasInCart) {
      state.onAddItemCart({ title, price, imgUrl, productId: id });
    } else {
      state.onRemoveItemCart(id);
    }
  };
  const handleFavorite = (id) => {
    if (!hasInFavorite) {
      state.onAddItemFavorite({ title, price, imgUrl, productId: id });
    } else {
      state.onRemoveItemFavorite(id);
    }
  };

  return (
    <div className={`${classes.card} ${disabled && classes.nonHover}`}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={200}
          viewBox="0 0 155 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="105" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="125" rx="3" ry="3" width="93" height="15" />
          <rect x="120" y="152" rx="8" ry="8" width="32" height="32" />
          <rect x="0" y="160" rx="8" ry="8" width="80" height="24" />
        </ContentLoader>
      ) : (
        <React.Fragment>
          <div className={classes.favorite}>
            {!disabled && (
              <img
                src={!hasInFavorite ? "/img/heart.svg" : "/img/heart-fill.svg"}
                alt="heart"
                onClick={() => handleFavorite(id)}
              />
            )}
          </div>
          <img src={imgUrl} alt="sneak" width={133} height={112} />
          <h5>{title}</h5>
          <div className={classes.info}>
            <div className={classes.cost}>
              <span>Цена:</span>
              <strong>{price} руб.</strong>
            </div>
            {!disabled && (
              <img
                src={!hasInCart ? "/img/add.svg" : "/img/added.svg"}
                alt="add"
                width={20}
                height={20}
                onClick={() => handleAddedCart(id)}
              />
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Card;
