import React from "react";
import styles from "./Button.module.css";
import Line from "../../assets/images/category/Line.svg";

export default function MainPage_button() {
  return (
    <div className={styles.buttons}>
      <button className={styles.first_button}>Main page</button>
      <img className={styles.Line} src={Line} />
    </div>
  );
}
