import React from "react";
import styles from "./Category.module.css";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../API/api";
import { useGetCategoriesQuery } from "../../API/Products_api";
import CustomButton from "../../components/reused/Buttons/Button";
import NavigationPath from "../../components/reused/Buttons/NavigationPath";

const initCategories = [];

export default function Category() {
  const { data: category = initCategories } = useGetCategoriesQuery();

  return (
    <div className={styles.container}>
      <div>
        <NavigationPath />
        <CustomButton title="Categories" className={styles.second_button} />
      </div>

      <h1 className={styles.title}>Categories</h1>
      <div className={styles.container_cards}>
        {category.map((category) => (
          <NavLink
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
