import React from "react";
import styles from "./Tools.module.css";
import Line from "../../assets/images/tools/Line.svg";
import Price_filter from "../FiltrationModules/Price_filter";
import Discounted_filter from "../FiltrationModules/Discounted_filter";
import Sorted_filter from "../FiltrationModules/Sorted_filter";
import { NavLink } from "react-router-dom";
import { useGetToolsQuery } from "../../API/Products_api";
import { API_URL } from "../../API/api";
import { useLocation } from "react-router";

const initTools = [];
export default function Tools() {
  const location = useLocation();
  const { state } = location;
  const { data: products = initTools } = useGetToolsQuery();
  const productsArray = products.data;
  console.log();
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.second_button}>Categories</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.third_button}>Tools and equipment</button>
      </div>
      <h1 className={styles.title}>{}</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Discounted_filter />
        <Sorted_filter />
      </div>

      <div className={styles.container_cards}>
        {productsArray
          ? productsArray.map((product) => (
              <NavLink
                to={"/Product"}
                state={{ id: product.id, title: product.title }}
                className={styles.card}
                key={product.id}
              >
                <img className={styles.picture} src={API_URL + product.image} />
                <h2 className={styles.product_name}>{product.title}</h2>
                <p className={styles.price}>{product.price + "$"}</p>
                <p className={styles.sale_price}>
                  {product.discont_price + "$"}
                </p>
              </NavLink>
            ))
          : ""}
      </div>
    </div>
  );
}
