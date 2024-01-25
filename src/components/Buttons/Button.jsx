import React from "react";
import styles from "./Button.module.css";

const CustomButton = ({ title, onClick, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
