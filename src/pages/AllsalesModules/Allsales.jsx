import React, { useMemo } from "react";
import styles from "./Allsales.module.css";
import Line from "../../assets/images/tools/Line.svg";
import Price_filter from "../../components/FiltrationModules/Price_filter";
import Sorted_filter from "../../components/FiltrationModules/Sorted_filter";
import { NavLink } from "react-router-dom";
import { useGetAllProductsQuery } from "../../API/Products_api";
import { API_URL } from "../../API/api";

const initProduct = [];

export default function Allsales() {
  const { data: products = initProduct } = useGetAllProductsQuery();

  const productsAllsales = useMemo(() => {
    return products.filter((product) => product.discont_price);
  }, [products]);

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
        {productsAllsales.map((product) => (
          <NavLink
            to="/Item"
            state={{ id: product.id, title: product.title }}
            className={styles.card}
            key={product.id}
          >
            <img className={styles.picture} src={API_URL + product.image} />
            <div className={styles.text}>
              <h2 className={styles.product_name}>{product.title}</h2>
              <span className={styles.sale_price}>
                {product.discont_price + "$"}
              </span>
              <span className={styles.full_price}>{product.price + "$"}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
