import React from "react";
import styles from "./Category.module.css";
import Line from "../../assets/images/categories/Line.svg";
import plant from "../../assets/images/category/plant.svg";
import green_plant from "../../assets/images/category/green_plant.svg";
import planting from "../../assets/images/category/planting.svg";
import tools from "../../assets/images/category/tools.svg";
import goods from "../../assets/images/category/goods.svg";
import planters from "../../assets/images/category/planters.svg";
import indoor_plants from "../../assets/images/category/indoor_plants.svg";
import figures from "../../assets/images/category/figures.svg";

export default function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.first_button}>Main page</button>
        <img className={styles.Line} src={Line} />

        <button className={styles.second_button}>Categories</button>
      </div>
      <h1 className={styles.title}>Categories</h1>

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
        <div className={styles.card}>
          <img className={styles.goods} src={goods} />
          <h2>Home Goods</h2>
        </div>
        <div className={styles.card}>
          <img className={styles.planters} src={planters} />
          <h2>Pots and planters</h2>
        </div>
        <div className={styles.card}>
          <img className={styles.indoor_plants} src={indoor_plants} />
          <h2>For indoor plants </h2>
        </div>
        <div className={styles.card}>
          <img className={styles.figures} src={figures} />
          <h2>Garden figures</h2>
        </div>
      </div>
    </div>
  );
}
