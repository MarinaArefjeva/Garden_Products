import React from "react";
import styles from "./Button.module.css";
import Line_img from "../../../assets/images/category/Line_img.svg";
import Button from "./Button";

export default function NavigationPath() {
  return (
    <div className={styles.buttons}>
      <Button className={styles.first_button} title="Main page" />
      <img className={styles.Line_img} src={Line_img} />
    </div>
  );
}
