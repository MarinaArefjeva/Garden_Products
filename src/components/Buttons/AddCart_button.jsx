import React from "react";

const AddtoCart = ({ title, onClick, className }) => {
  return (
    <button className={`AddtoCart ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default AddtoCart;
