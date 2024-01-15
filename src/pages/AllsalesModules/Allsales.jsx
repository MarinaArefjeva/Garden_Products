// import React from "react";
// import styles from "./Allsales.module.css";
// import Line from "../../assets/images/tools/Line.svg";
// import Price_filter from "../FiltrationModules/Price_filter";
// import Sorted_filter from "../FiltrationModules/Sorted_filter";
// import { NavLink } from "react-router-dom";
// // import { useGetAllSalesQuery } from "../../API/Products_api";
// import { API_URL } from "../../API/api";

// const initAllsales = [];

// export default function Allsales() {
//   const { data: allSales = initAllsales } = useGetAllSalesQuery();
//   return (
//     <div className={styles.container}>
//       <div className={styles.button}>
//         <button className={styles.first_button}>Main page</button>
//         <img className={styles.Line} src={Line} />

//         <button className={styles.second_button}>All products</button>
//         <img className={styles.Line} src={Line} />
//       </div>
//       <h1 className={styles.title}>All sales</h1>

//       <div className={styles.form_container}>
//         <Price_filter />
//         <Sorted_filter />
//       </div>

//       <div className={styles.container_cards}>
//         {allSales.map((sales) => (
//           <NavLink to="/" className={styles.card} key={sales.id}>
//             <img className={styles.plant} src={API_URL + sales.image} />
//             <h2>{sales.title}</h2>
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// }
