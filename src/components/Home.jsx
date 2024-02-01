import React from "react";
import Header from "../Header/Header";
import Discount from "../HomeModules/Discount/Discount";
import Categories from "../HomeModules/Categories/Categories";
import OrderForm from "../HomeModules/OrderForm/OrderForm";
import Sale from "../HomeModules/Sale/Sale";
import Footer from "../Footer/Footer";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Discount />
      <div className={styles.home_container}>
        <Categories />
        <OrderForm />
        <Sale />
        <Footer />
      </div>
    </>
  );
}
