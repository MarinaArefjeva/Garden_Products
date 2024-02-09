import React, { isValidElement } from "react";
import { useForm } from "react-hook-form";
import styles from "./OrderForm.module.css";
import products from "../../../assets/images/order.form/products.svg";

export default function OrderForm() {
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
    <div className={styles.container}>
      <p className={styles.paragraph}>5% off on the first order</p>

      <div className={styles.img_form_container}>
        <img className={styles.products} src={products} />

        <div className={styles.container_form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <input
                type="name"
                className={styles.input_order_form}
                placeholder="Name"
                {...register("name", {
                  required: true,
                })}
              />
            </label>
            <div>
              {errors?.name && <p>{`${errors.name?.message}  "Error!"`}</p>}
            </div>
            <label>
              <input
                type="number"
                className={styles.input_order_form}
                placeholder="Phone number"
                {...register("number", {
                  required: true,
                })}
              />
            </label>
            <div>
              {errors?.name && <p>{`${errors.number?.message}  "Error!"`}</p>}
            </div>
            <label>
              <input
                type="email"
                className={styles.input_order_form}
                placeholder="Email"
                {...register("email", {
                  required: true,
                })}
              />
            </label>
            <div>
              {errors?.email && <p>{`${errors.email?.message}  "Error!"`}</p>}
            </div>

            <button className={styles.button}>Get a discount</button>
          </form>
        </div>
      </div>
    </div>
  );
}
