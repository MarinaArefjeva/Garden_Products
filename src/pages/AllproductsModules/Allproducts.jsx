import React from "react";
import styles from "./Allproducts.module.css";
import Line from "../../assets/images/tools/Line.svg";
import Price_filter from "../FiltrationModules/Price_filter";
import Discounted_filter from "../FiltrationModules/Discounted_filter";
import Sorted_filter from "../FiltrationModules/Sorted_filter";
import { NavLink } from "react-router-dom";
import { useGetAllProductsQuery } from "../../API/Products_api";
import { API_URL } from "../../API/api";

const initAllproducts = [];

export default function Allproducts() {
  const { data: allProducts = initAllproducts } = useGetAllProductsQuery();
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.second_button}>All products</button>
      </div>
      <h1 className={styles.title}>All products</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Discounted_filter />
        <Sorted_filter />
      </div>

      <div className={styles.container_cards}>
        {allProducts.slice(0, 11).map((products) => (
          <NavLink to="/" className={styles.card} key={products.id}>
            <img className={styles.picture} src={API_URL + products.image} />
            <h2 className={styles.product_name}>{products.title}</h2>
            <p className={styles.price}>{products.price + "$"}</p>
            <p className={styles.sale_price}>{products.discont_price + "$"}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
