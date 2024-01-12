import React from "react";
import Header from "../components/Header/Header";
import Discount from "../components/HomeModules/Discount/Discount";
import Categories from "../components/HomeModules/Categories/Categories";
import OrderForm from "../components/HomeModules/OrderForm/OrderForm";
import Sale from "../components/HomeModules/Sale/Sale";
import Footer from "../components/Footer/Footer";
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
