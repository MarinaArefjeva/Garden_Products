import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomeModules/MainPage/Home";
import Category from "./pages/CategoryModules/Category";
import Equipments from "./pages/EquipmentsModules/Equipments";
import Tools from "./pages/ToolsModules/Tools";
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
          <Route path="Equipments" element={<Equipments />} />
          <Route path="Tools" element={<Tools />} />
        </Route>
      </Routes>
      {/* </ApiProvider> */}
    </div>
  );
}

export default App;
