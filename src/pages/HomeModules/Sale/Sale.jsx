import React from "react";
import styles from "./Sale.module.css";
import Line from "../../../assets/images/categories/Line.svg";
import { useGetAllProductsQuery } from "../../../API/Products_api";
import ProductCart from "../../../components/ProductCart/ProductCart";

const initAllproducts = [];

export default function Sale() {
  const { data: allproducts = initAllproducts } = useGetAllProductsQuery();

  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1>Sale</h1>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>All sales </button>
      </div>

      <div className={styles.container_cards}>
        {allproducts.slice(0, 4).map((product) => (
          <ProductCart product={product} />
        ))}
      </div>
    </div>
  );
}
