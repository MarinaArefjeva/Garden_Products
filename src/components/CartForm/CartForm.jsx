import React from "react";
import { useForm } from "react-hook-form";
import styles from "./CartForm.module.css";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/slices/CartSlices";

export default function CartForm({ price }) {
  const { cart: cartProducts } = useSelector(cartSelector);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div className={styles.cart_form}>
      <h2 className={styles.subtitle}>Order details</h2>
      <div className={styles.order}>
        <p className={styles.items}>{`${cartProducts.length} items`}</p>
        <div className={styles.string}>
          <p className={styles.total}> Total</p>
          <p className={styles.order_price}>{`$${price}`}</p>
        </div>
      </div>
      <div className={styles.container_form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input
              type="name"
              className={styles.input_order_form}
              placeholder="Name"
              {...register("name", {
                required: "field is required ",
              })}
            />
          </label>
          {errors?.name && <p>{`${errors.name?.message}  "Error!"`}</p>}

          <label>
            <input
              type="number"
              className={styles.input_order_form}
              placeholder="Phone number"
              {...register("number", {
                required: "field is required ",
              })}
            />
          </label>
          {errors?.number && <p>{`${errors.number?.message}  "Error!"`}</p>}

          <label>
            <input
              type="email"
              className={styles.input_order_form}
              placeholder="Email"
              {...register("email", {
                required: "field is required ",
              })}
            />
          </label>
          {errors?.email && <p>{`${errors.email?.message}  "Error!"`}</p>}
          <button className={styles.button}>Order</button>
        </form>
      </div>
    </div>
  );
}
