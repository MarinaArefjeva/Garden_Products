import React from "react";
import styles from "./Tools.module.css";
import Line from "../../assets/images/tools/Line.svg";
import Price_filter from "../FiltrationModules/Price_filter";
import Discounted_filter from "../FiltrationModules/Discounted_filter";
import Sorted_filter from "../FiltrationModules/Sorted_filter";

export default function Tools() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.second_button}>Categories</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.third_button}>Tools and equipment</button>
      </div>
      <h1 className={styles.title}>Tools and equipment</h1>

      <div className={styles.form_container}>
        <Price_filter />
        <Discounted_filter />
        <Sorted_filter />
      </div>

      {/* <div className={styles.filter}>
        <div className={styles.price_filter}>
          <h2 className={styles.subheading}>Price</h2>
          <input className={styles.input} placeholder="from" />
          <input className={styles.input} placeholder="to" />
        </div>
        <div className={styles.items}>
          <h2 className={styles.subheading}>Discounted items</h2>
          <input className={styles.box} placeholder />
        </div>
        <div className={styles.sorting}>
          <h2 className={styles.subheading}>Sorted</h2>
          <input className={styles.input} placeholder="by default" />
        </div> */}
      {/* </div> */}
    </div>
  );
}
