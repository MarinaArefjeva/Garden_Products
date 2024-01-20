import React, { useEffect } from "react";
import styles from "./Categories.module.css";
import Line from "../../../assets/images/categories/Line.svg";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../../API/api";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../storage/Slice/categorySlice";
import { useGetCategoriesQuery } from "../../../API/Products_api";

const initCategories = [];

export default function Categories() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCategory());
  // }, [dispatch]);
  // const { category } = useSelector(({ category }) => category);
  // console.log(category);

  const { data: category = initCategories } = useGetCategoriesQuery();

  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1 className={styles.title}>Categories</h1>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>All categories </button>
      </div>

      <div className={styles.container_cards}>
        {category.slice(0, 4).map((category) => (
          <NavLink className={styles.card} key={category.id}>
            <img className={styles.picture} src={API_URL + category.image} />
            <h2>{category.title}</h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
