import React from "react";
import styles from "./Sale.module.css";
import Line from "../../../assets/images/categories/Line.svg";
import Bridge from "../../../assets/images/sale/Bridge.svg";

export default function Sale() {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1>Sale</h1>
        <img className={styles.Line} src={Line} />
        <button className={styles.button}>All sales </button>
      </div>

      <div className={styles.container_cards}>
        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <h2 className={styles.title}></h2>
          <p className={styles.price}></p>
        </div>

        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <h2 className={styles.title}></h2>
          <p className={styles.price}></p>
        </div>

        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <h2 className={styles.title}></h2>
          <p className={styles.price}></p>
        </div>

        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <h2 className={styles.title}></h2>
          <p className={styles.price}></p>
        </div>
      </div>
    </div>
  );
}
