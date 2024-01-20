import React from "react";
import styles from "./Category.module.css";
import Line from "../../assets/images/categories/Line.svg";
import { NavLink, useLocation } from "react-router-dom";
import { API_URL } from "../../API/api";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../API/Products_api";

const initCategories = [];

export default function Category({ setfirst }) {
  // const { category } = useSelector(({ category }) => category);
  const location = useLocation();
  const { state } = location;
  console.log(location);
  const { data: category = initCategories } = useGetCategoriesQuery();

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.second_button}>Categories</button>
      </div>
      <h1 className={styles.title}>Categories</h1>

      <div className={styles.container_cards}>
        {category.map((category) => (
          <NavLink
            // onClick={setfirst(category.id)}
            state={{ id: category.id, title: category.title }}
            to="/Tools"
            className={styles.card}
            key={category.id}
          >
            <img className={styles.picture} src={API_URL + category.image} />
            <h2>{category.title}</h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
