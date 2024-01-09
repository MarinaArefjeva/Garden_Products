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
        <button className={styles.button}>All categories </button>
      </div>

      <div className={styles.container_cards}>
        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <h2>Decorative forged bridge</h2>
          <p>$500</p>
        </div>

        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <h2>Decorative forged bridge</h2>
          <p>$500</p>
        </div>

        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <h2>Decorative forged bridge</h2>
          <p>$500</p>
        </div>

        <div className={styles.card}>
          <img className={styles.Bridge} src={Bridge} />
          <h2>Decorative forged bridge</h2>
          <p>$500</p>
        </div>
      </div>
    </div>
  );
}
