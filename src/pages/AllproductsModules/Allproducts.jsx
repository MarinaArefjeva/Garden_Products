import React from "react";
import styles from "./Allproducts.module.css";
import Price_filter from "../../components/reused/FiltrationModules/Price_filter";
import Discounted_filter from "../../components/reused/FiltrationModules/Discounted_filter";
import Sorted_filter from "../../components/reused/FiltrationModules/Sorted_filter";
import { useGetAllProductsQuery } from "../../API/Products_api";
import ProductCart from "../../components/reused/ProductCart/ProductCart";
import CustomButton from "../../components/reused/Buttons/Button";
import NavigationPath from "../../components/reused/Buttons/NavigationPath";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/slices/CartSlices";

const initAllproducts = [];

export default function Allproducts() {
  const { data: allproducts = initAllproducts } = useGetAllProductsQuery();
  const { cart: cartProducts } = useSelector(cartSelector);
  console.log(cartProducts);

  return (
    <div className={styles.container}>
      <div>
        <NavigationPath />
        <CustomButton title="All products" className={styles.second_button} />
      </div>

      <h1 className={styles.title}>All products</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Discounted_filter />
        <Sorted_filter />
      </div>

      <ProductCart arr={allproducts} />
    </div>
  );
}
