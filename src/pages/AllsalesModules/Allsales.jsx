import React, { useMemo } from "react";
import styles from "./Allsales.module.css";
import Price_filter from "../../components/FiltrationModules/Price_filter";
import Sorted_filter from "../../components/FiltrationModules/Sorted_filter";
import { useGetAllProductsQuery } from "../../API/Products_api";
import ProductCart from "../../components/ProductCart/ProductCart";
import MainPage_button from "../../components/Buttons/MainPage_button";

const initProduct = [];

export default function Allsales() {
  const { data: products = initProduct } = useGetAllProductsQuery();

  const productsAllsales = useMemo(() => {
    return products.filter((product) => product.discont_price);
  }, [products]);

  return (
    <div className={styles.container}>
      <MainPage_button />
      <button className={styles.second_button}>All sales</button>

      <h1 className={styles.title}>All sales</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Sorted_filter />
      </div>

      <div className={styles.container_cards}>
        {productsAllsales.map((product) => (
          <ProductCart product={product} />
        ))}
      </div>
    </div>
  );
}
