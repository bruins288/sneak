import React from "react";

import classes from "./Info.module.scss";

function Info({ image, title, description, onClosedCart }) {
  return (
    <div className={classes.empty}>
      <img src={image} alt={title} width={120} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="green-button" onClick={onClosedCart}>
        <img src="/img/arrow.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
}

export default Info;
