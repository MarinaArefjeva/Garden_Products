import React from "react";
import styles from "./Sale.module.css";
import Line from "../../../assets/images/categories/Line.svg";
import Bridge from "../../../assets/images/sale/Bridge.svg";
import flowers from "../../../assets/images/sale/flowers.svg";
import lock from "../../../assets/images/sale/lock.svg";
import secateurs from "../../../assets/images/sale/secateurs.svg";
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
          <h2>Decorative forged bridge</h2>
          <p className={styles.price}>$500</p>
        </div>

        <div className={styles.card}>
          <img className={styles.flowers} src={flowers} />
          <h2>Flower basket</h2>
          <p className={styles.price}>$100</p>
        </div>

        <div className={styles.card}>
          <img className={styles.lock} src={lock} />
          <h2>Aquarium lock</h2>
          <p className={styles.price}>$150</p>
        </div>

        <div className={styles.card}>
          <img className={styles.secateurs} src={secateurs} />
          <h2>Secateurs</h2>
          <p className={styles.price}>$199</p>
        </div>
      </div>
    </div>
  );
}
