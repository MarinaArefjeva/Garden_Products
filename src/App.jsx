import "./App.css";
import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

function App() {
  return (
    <div>
      <Home />
      <Categories />
    </div>
  );
}

export default App;
