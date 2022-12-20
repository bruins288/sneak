import React from "react";

import classes from "./Card.module.scss";

function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.favorite}>
        <img src="/img/heart.svg" alt="heart" />
      </div>
      <img src={props.imgUrl} alt="sneak" width={133} height={112} />
      <h5>{props.title}</h5>
      <div className={classes.info}>
        <div className={classes.cost}>
          <span>Цена:</span>
          <strong>{props.price} руб.</strong>
        </div>
        <button className="button" onClick={props.onClick}>
          <img src="/img/add.svg" alt="add" width={15} height={15} />
        </button>
      </div>
    </div>
  );
}

export default Card;
