import React from "react";
import styles from "./Tools.module.css";
import Line from "../../assets/images/tools/Line.svg";

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
    </div>
  );
}
