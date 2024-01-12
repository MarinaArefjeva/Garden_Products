import "./App.css";
import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Equipments from "./pages/Equipments";
function App() {
  return (
    <div>
      <Home />
      <Categories />
      <Equipments />
    </div>
  );
}

export default App;
