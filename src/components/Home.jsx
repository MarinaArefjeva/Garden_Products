import React from "react";
import Header from "./Header/Header";
import Discount from "./HomeModules/Discount/Discount";
import Categories from "./HomeModules/Categories/Categories";
import OrderForm from "./HomeModules/OrderForm/OrderForm";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Header />
      <Discount />
      <Categories />
      <OrderForm />
    </div>
  );
}
