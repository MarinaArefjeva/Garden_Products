import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomeModules/MainPage/Home";
import Category from "./pages/CategoryModules/Category";
import Allproducts from "./pages/AllproductsModules/Allproducts";
import Product from "./pages/ProductModules/Product";
import Tools from "./pages/ToolsModules/Tools";
import Item from "./pages/ItemModules/Item";
import Layouts from "./pages/Layouts/Layouts";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

function App() {
  return (
    <div>
      {/* <ApiProvider> */}
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="" element={<Home />} />
          <Route path="Categories" element={<Category />} />
          <Route path="Allproducts" element={<Allproducts />} />
          <Route path="Product" element={<Product />} />
          <Route path="Tools" element={<Tools />} />
          <Route path="Item" element={<Item />} />
        </Route>
      </Routes>
      {/* </ApiProvider> */}
    </div>
  );
}

export default App;
