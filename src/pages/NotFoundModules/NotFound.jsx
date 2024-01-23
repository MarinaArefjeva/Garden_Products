import React from "react";
import styles from "./NotFound.module.css";
import four_picture from "../../assets/images/notfound/four_picture.svg";
import zero_picture from "../../assets/images/notfound/zero_picture.svg";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.pictures}>
        <img className={styles.four} src={four_picture} />
        <img className={styles.zero} src={zero_picture} />
        <img className={styles.four} src={four_picture} />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.paragraph}>
          We’re sorry, the page you requested could not be found.
          <br /> Please go back to the homepage.
        </p>
        <button className={styles.button}>Go Home</button>
      </div>
    </div>
  );
}
