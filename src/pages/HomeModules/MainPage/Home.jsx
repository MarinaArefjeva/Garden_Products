import React from "react";
import Discount from "../Discount/Discount";
import Categories from "../Categories/Categories";
import OrderForm from "../OrderForm/OrderForm";
import Sale from "../Sale/Sale";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Discount />
      <div className={styles.home_container}>
        {/* <Categories /> */}
        <OrderForm />
        <Sale />
      </div>
    </>
  );
}
