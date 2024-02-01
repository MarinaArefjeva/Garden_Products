import React from "react";

const CustomButton = ({ title, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
