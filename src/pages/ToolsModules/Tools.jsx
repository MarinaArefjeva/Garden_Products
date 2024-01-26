import React from "react";
import styles from "./Tools.module.css";
import Line from "../../components/Buttons/Line";
import Price_filter from "../../components/FiltrationModules/Price_filter";
import Discounted_filter from "../../components/FiltrationModules/Discounted_filter";
import Sorted_filter from "../../components/FiltrationModules/Sorted_filter";
import { useLocation } from "react-router-dom";
import { useGetToolsQuery } from "../../API/Products_api";
import ProductCart from "../../components/ProductCart/ProductCart";
import MainPage_button from "../../components/Buttons/MainPage_button";
import CustomButton from "../../components/Buttons/Button";
const initAllproducts = [];

export default function Tools() {
  const location = useLocation();
  const { state } = location;
  const { data: allproducts = initAllproducts } = useGetToolsQuery(state.id);
  const { category, data } = allproducts;

  return (
    <div className={styles.container}>
      <div>
        <MainPage_button />
        <CustomButton title="Categories" className={styles.second_button} />
        <Line />
        <CustomButton
          title="Tools and equipment"
          className={styles.third_button}
        />
      </div>

      <h1 className={styles.title}>{}</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Discounted_filter />
        <Sorted_filter />
      </div>
      <div className={styles.container_cards}>
        {data ? data.map((product) => <ProductCart product={product} />) : ""}
      </div>
    </div>
  );
}
