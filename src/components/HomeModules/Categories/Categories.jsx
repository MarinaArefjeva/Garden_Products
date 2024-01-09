import React from "react";
import styles from "./Categories.module.css";
import Line from "../../../assets/images/categories/Line.svg";
import plant from "../../../assets/images/categories/plant.svg";

export default function Categories() {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1 className={styles.title}>Categories</h1>
        {/* <hr className={styles.line} /> */}
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>All categories </button>
      </div>

      <div className={styles.container_cards}>
        <div className={styles.card}>
          <img className={styles.plant} src={plant} />
          <h2>Fertilizer</h2>
        </div>

        <div className={styles.card}>
          <img className={styles.plant} src={plant} />
          <h2>Fertilizer</h2>
        </div>

        <div className={styles.card}>
          <img className={styles.plant} src={plant} />
          <h2>Fertilizer</h2>
        </div>

        <div className={styles.card}>
          <img className={styles.plant} src={plant} />
          <h2>Fertilizer</h2>
        </div>
      </div>
    </div>
  );
}
