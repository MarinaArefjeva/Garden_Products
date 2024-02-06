import React from "react";
import styles from "./Tools.module.css";
import Price_filter from "../../components/reused/FiltrationModules/Price_filter";
import Discounted_filter from "../../components/reused/FiltrationModules/Discounted_filter";
import Sorted_filter from "../../components/reused/FiltrationModules/Sorted_filter";
import { useLocation } from "react-router-dom";
import { useGetToolsQuery } from "../../API/Products_api";
import ProductCart from "../../components/reused/ProductCart/ProductCart";
import CustomButton from "../../components/reused/Buttons/Button";
import Line from "../../components/reused/Buttons/Line";
import NavigationPath from "../../components/reused/Buttons/NavigationPath";
let initAllproducts = [];

export default function Tools() {
  const location = useLocation();
  const { state } = location;
  const { data, isLoading } = useGetToolsQuery(state.id);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    initAllproducts = data;
  }
  return (
    <div className={styles.container}>
      <>
        <NavigationPath />
        <CustomButton title="Categories" className={styles.second_button} />
        <Line />
        <CustomButton
          title="Tools and equipment"
          className={styles.third_button}
        />
      </>

      <h1 className={styles.title}>Discounted items</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Discounted_filter />
        <Sorted_filter />
      </div>
      <ProductCart arr={initAllproducts.data} />
    </div>
  );
}
