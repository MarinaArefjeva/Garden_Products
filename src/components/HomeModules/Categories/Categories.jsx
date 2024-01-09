import React from "react";
import styles from "./Categories.module.css";
import Line from "../../../assets/images/categories/Line.svg";
import plant from "../../../assets/images/categories/plant.svg";
import green_plant from "../../../assets/images/categories/green_plant.svg";
import planting from "../../../assets/images/categories/planting.svg";
import tools from "../../../assets/images/categories/tools.svg";
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
          <img className={styles.green_plant} src={green_plant} />
          <h2>Protective products and septic tanks</h2>
        </div>

        <div className={styles.card}>
          <img className={styles.planting} src={planting} />
          <h2>Planting material </h2>
        </div>

        <div className={styles.card}>
          <img className={styles.tools} src={tools} />
          <h2>Tools and equipment</h2>
        </div>
      </div>
    </div>
  );
}
