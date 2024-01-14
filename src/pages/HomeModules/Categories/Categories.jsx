import React from "react";
import styles from "./Categories.module.css";
import Line from "../../../assets/images/categories/Line.svg";
import plant from "../../../assets/images/categories/plant.svg";
import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../API/Products_api";
import { API_URL } from "../../../API/api";

// import green_plant from "../../../assets/images/categories/green_plant.svg";
// import planting from "../../../assets/images/categories/planting.svg";
// import tools from "../../../assets/images/categories/tools.svg";

const initCategories = [];

export default function Categories() {
  const { data: allCategories = initCategories } = useGetCategoriesQuery();
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1 className={styles.title}>Categories</h1>
        {/* <hr className={styles.line} /> */}
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>All categories </button>
      </div>

      <div className={styles.container_cards}>
        {allCategories.slice(0, 4).map((category) => (
          <NavLink className={styles.card} key={category.id}>
            <img className={styles.plant} src={API_URL + category.image} />
            <h2>{category.title}</h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
