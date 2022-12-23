import React from "react";

import Card from "../components/Card";

function Home({
  goods,
  searchValue,
  setSearchValue,
  changeSearchInput,
  onAddCart,
  onAddFavorite,
}) {
  return (
    <main className="content">
      <div className="content__center">
        <h1>{searchValue ? `Поиск по: "${searchValue}"` : "Все кроссовки"}</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          <input
            type="text"
            placeholder="Поиск..."
            value={searchValue}
            onChange={changeSearchInput}
          />
          {searchValue && (
            <img
              src="/img/delete.svg"
              alt="clear"
              width={20}
              height={20}
              onClick={() => setSearchValue("")}
            />
          )}
        </div>
      </div>
      <div className="content__goods">
        {goods
          .filter((element) =>
            element.title.toLowerCase().includes(searchValue)
          )
          .map((element) => (
            <Card
              key={element.id}
              addCart={onAddCart}
              addFavorite={onAddFavorite}
              {...element}
            />
          ))}
      </div>
    </main>
  );
}

export default Home;
