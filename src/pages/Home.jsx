import React from "react";

import Card from "../components/Card";
import AppContext from "../context.js";

function Home() {
  const [searchValue, setSearchValue] = React.useState("");

  const changeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const state = React.useContext(AppContext);

  const renderCards = () => {
    let filteredProducts = state.products.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (state.isLoading ? [...Array(12)] : filteredProducts).map(
      (item, index) => (
        <Card key={index} isLoading={state.isLoading} {...item} />
      )
    );
  };

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
      <div className="content__goods">{renderCards()}</div>
    </main>
  );
}

export default Home;
