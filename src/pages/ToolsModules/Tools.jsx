import React from "react";
import styles from "./Tools.module.css";
import Price_filter from "../../components/reused/FiltrationModules/Price_filter";
import Discounted_filter from "../../components/reused/FiltrationModules/Discounted_filter";
import Sorted_filter from "../../components/reused/FiltrationModules/Sorted_filter";
import { useLocation } from "react-router-dom";
import { useGetToolsQuery } from "../../API/Products_api";
import ProductCart from "../../components/reused/ProductCart/ProductCart";
import CustomButton from "../../components/reused/Buttons/Button";
import NavigationPath from "../../components/reused/Buttons/NavigationPath";
const initAllproducts = [];

export default function Tools() {
  const location = useLocation();
  const { state } = location;
  const { data: allproducts = initAllproducts } = useGetToolsQuery(state.id);
  const { category, data } = allproducts;

  return (
    <div className={styles.container}>
      <div>
        <NavigationPath />
        <CustomButton title="Categories" className={styles.second_button} />
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
        <ProductCart arr={data} />
      </div>
    </div>
  );
}
