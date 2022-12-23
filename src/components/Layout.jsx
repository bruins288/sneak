import React from "react";
import { Outlet } from "react-router-dom";

import Drawer from "./Drawer.jsx";
import Header from "./Header.jsx";

function Layout({ goodsOnCart, onRemoveGoodCart }) {
  const [isCartOpened, setIsCartOpened] = React.useState(false);
  return (
    <div className="wrapper">
      {isCartOpened && (
        <Drawer
          goodsOnCart={goodsOnCart}
          onClosedCart={() => setIsCartOpened(!isCartOpened)}
          removeGood={onRemoveGoodCart}
        />
      )}
      <Header onOpenedCart={() => setIsCartOpened(!isCartOpened)} />
      <Outlet />
    </div>
  );
}

export default Layout;
