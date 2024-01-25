// Page1.js
import React from "react";
import CustomButton from "../components/Buttons/Button";
import styles from "../components/Buttons/Button.module.css";

const Page1 = () => {
  const handleButtonClick = () => {
    // Your button click logic for Page1
    console.log("Button clicked on Page1");
  };

  return (
    <div>
      <h1>Page 1</h1>
      <CustomButton
        title="Categories"
        onClick={handleButtonClick}
        className={styles.second_button}
      />
    </div>
  );
};

export default Page1;
