import React from "react";
import { Outlet } from "react-router-dom";

import Drawer from "./Drawer.jsx";
import Header from "./Header.jsx";
import AppContext from "../context.js";

function Layout() {
  const [isCartOpened, setIsCartOpened] = React.useState(false);
  const state = React.useContext(AppContext);
  return (
    <div className="wrapper">
      {isCartOpened && (
        <Drawer
          itemsOnCart={state.productsInCart}
          onClosedCart={() => setIsCartOpened(!isCartOpened)}
          removeItem={state.onRemoveItemCart}
        />
      )}
      <Header onOpenedCart={() => setIsCartOpened(!isCartOpened)} />
      <Outlet />
    </div>
  );
}

export default Layout;
