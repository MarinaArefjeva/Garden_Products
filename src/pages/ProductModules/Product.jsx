import React from "react";
import styles from "./Product.module.css";
import Line from "../../assets/images/tools/Line.svg";
import Price_filter from "../FiltrationModules/Price_filter";
import Sorted_filter from "../FiltrationModules/Sorted_filter";
import { NavLink } from "react-router-dom";
import { useGetProductQuery } from "../../API/Products_api";
import { API_URL } from "../../API/api";

const initProduct = [];

export default function Product() {
  const { data: products = initProduct } = useGetProductQuery();
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />
        <button className={styles.second_button}>All sales</button>
      </div>
      <h1 className={styles.title}>All sales</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Sorted_filter />
      </div>

      <div className={styles.container_cards}>
        {products.map((product) => (
          <NavLink to="/" className={styles.card} key={product.id}>
            <img className={styles.picture} src={API_URL + product.image} />
            <h2 className={styles.product_name}>{product.title}</h2>
            <p className={styles.price}>{product.price + "$"}</p>
            <p className={styles.sale_price}>{product.discont_price + "$"}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
