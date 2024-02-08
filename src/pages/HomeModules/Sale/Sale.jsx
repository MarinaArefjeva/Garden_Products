import React from "react";
import styles from "./Sale.module.css";
import Line from "../../../assets/images/categories/Line.svg";
import { useGetAllProductsQuery } from "../../../API/Products_api";
import ProductCart from "../../../components/reused/ProductCart/ProductCart";

let initAllproducts = [];

export default function Sale() {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    initAllproducts = data;
  }
  const productsAllsales = data.filter((product) => product.discont_price);

  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1>Sale</h1>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>All sales </button>
      </div>

      <div className={styles.container_cards}>
        <ProductCart arr={productsAllsales.slice(0, 4)} />
      </div>
    </div>
  );
}
