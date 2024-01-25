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
import Page1 from "./pages/Page1";
import Layouts from "./pages/Layouts/Layouts";

function App() {
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
          <Route path="Page1" element={<Page1 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
