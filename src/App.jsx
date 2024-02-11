import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomeModules/MainPage/Home";
import Category from "./pages/CategoryModules/Category";
import Allproducts from "./pages/AllproductsModules/Allproducts";
import Allsales from "./pages/AllsalesModules/Allsales";
import Tools from "./pages/ToolsModules/Tools";
import Item from "./pages/ItemModules/Item";
import Cart from "./pages/CartModules/Cart";
import NotFound from "./pages/NotFoundModules/NotFound";
import Layouts from "./pages/Layouts/Layouts";
import { useGetAllProductsQuery } from "./API/Products_api";
import { useDispatch } from "react-redux";
import { setProducts } from "./store/slices/ProductsSlices";

function App() {
  const dispatch = useDispatch();
  const { data } = useGetAllProductsQuery();
  dispatch(setProducts(data));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="" element={<Home />} />
          <Route path="Categories" element={<Category />} />
          <Route path="Allproducts" element={<Allproducts />} />
          <Route path="Allsales" element={<Allsales />} />
          <Route path="Tools" element={<Tools />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Item" element={<Item />} />
          <Route path="NotFound" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
