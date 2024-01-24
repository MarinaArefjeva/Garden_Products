import React, { useEffect } from "react";
import styles from "./Allproducts.module.css";
import Line from "../../assets/images/tools/Line.svg";
import Price_filter from "../../components/FiltrationModules/Price_filter";
import Discounted_filter from "../../components/FiltrationModules/Discounted_filter";
import Sorted_filter from "../../components/FiltrationModules/Sorted_filter";
import { useGetAllProductsQuery } from "../../API/Products_api";
import ProductCart from "../../components/ProductCart/ProductCart";
import MainPage_button from "../../components/Buttons/MainPage_button";

const initAllproducts = [];

export default function Allproducts() {
  const { data: allproducts = initAllproducts } = useGetAllProductsQuery();

  return (
    <div className={styles.container}>
      <MainPage_button />
      <button className={styles.second_button}>All products</button>

      <h1 className={styles.title}>All products</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Discounted_filter />
        <Sorted_filter />
      </div>

      <div className={styles.container_cards}>
        {allproducts.map((product) => (
          <ProductCart product={product} />
        ))}
      </div>
    </div>
  );
}
