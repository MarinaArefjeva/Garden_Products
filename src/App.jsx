import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomeModules/MainPage/Home";
import Category from "./pages/CategoryModules/Category";
import Allproducts from "./pages/AllproductsModules/Allproducts";
import Allsales from "./pages/AllsalesModules/Allsales";
import Tools from "./pages/ToolsModules/Tools";
import Item from "./pages/ItemModules/Item";
import Cart from "./pages/CartModules/Cart";
import Layouts from "./pages/Layouts/Layouts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategory } from "./storage/Slice/categorySlice";

function App() {
  const [first, setfirst] = useState("");
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCategory());
  // }, [dispatch]);
  // const { category } = useSelector(({ category }) => category);
  // console.log(category);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="" element={<Home />} />
          <Route path="Categories" element={<Category setfirst={setfirst} />} />
          <Route path="Allproducts" element={<Allproducts />} />
          <Route path="Allsales" element={<Allsales />} />
          <Route path="Tools" element={<Tools first={first} />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Item" element={<Item />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
