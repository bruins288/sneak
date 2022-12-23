import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./components/AppRoutes.js";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
