import React from "react";
import styles from "./Category.module.css";
import Line from "../../assets/images/categories/Line.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useGetCategoriesQuery } from "../../API/Products_api";
import { API_URL } from "../../API/api";
// import { useLocation } from "react-router";

const initCategories = [];

export default function Category() {
  const { data: allCategories = initCategories } =
    useGetCategoriesQuery();
    // state.id
  // const location = useLocation();
  // const { state } = location;
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.second_button}>Categories</button>
      </div>
      <h1 className={styles.title}>Categories</h1>

      <div className={styles.container_cards}>
        {allCategories.map((category) => (
          <NavLink
            to="/Tools"
            // state={{ id: category.id, title: category.title }}
            className={styles.card}
            key={category.id}
          >
            <img className={styles.picture} src={API_URL + category.image} />
            <h2>{category.name}</h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
