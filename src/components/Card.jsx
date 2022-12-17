import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card__favorite">
        <img src="/img/heart.svg" alt="heart" />
      </div>
      <img src="/img/sneaks/1.jpg" alt="sneak" width={133} height={112} />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="card__info">
        <div className="card__cost">
          <span>Цена:</span>
          <strong>12 999 руб.</strong>
        </div>
        <button className="button">
          <img src="/img/add.svg" alt="add" width={15} height={15} />
        </button>
      </div>
    </div>
  );
}

export default Card;
