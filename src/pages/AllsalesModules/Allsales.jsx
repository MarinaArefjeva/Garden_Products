import React, { useMemo } from "react";
import styles from "./Allsales.module.css";
import Price_filter from "../../components/reused/FiltrationModules/Price_filter";
import Sorted_filter from "../../components/reused/FiltrationModules/Sorted_filter";
import { useGetAllProductsQuery } from "../../API/Products_api";
import ProductCart from "../../components/reused/ProductCart/ProductCart";
import NavigationPath from "../../components/reused/Buttons/NavigationPath";
import CustomButton from "../../components/reused/Buttons/Button";

let initProduct = [];

export default function Allsales() {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    initProduct = data;
  }
  const productsAllsales = initProduct.filter(
    (product) => product.discont_price
  );

  return (
    <div className={styles.container}>
      <NavigationPath />
      <CustomButton title="All sales" className={styles.second_button} />

      <h1 className={styles.title}>All sales</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Sorted_filter />
      </div>

      <ProductCart arr={productsAllsales} />
    </div>
  );
}
