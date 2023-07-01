"use client";

import React from "react";
import { BookMarkHome, Kep, UsdSquareHome, UsersIcon } from "../../../public/icons";
import styles from "./styles.module.css";

const HomeComp = () => {
  return (
    <div className={styles.container}>
      <div className={[`${styles.card} ${styles.cardStudentBg}`]}>
        <Kep className={styles.icon}/>
        <h4 className={styles.categoryName}>Students</h4>
        <h2 className={styles.number}>243</h2>
      </div>
      <div className={[`${styles.card} ${styles.cardCourseBg}`]}>
        <BookMarkHome className={styles.icon}/>
        <h4 className={styles.categoryName}>Course</h4>
        <h2 className={styles.number}>13</h2>
      </div>
      <div className={[`${styles.card} ${styles.cardPaymentBg}`]}>
        <UsdSquareHome className={styles.icon}/>
        <h4 className={styles.categoryName}>Payments</h4>
        <h2 className={styles.number}>556,000₺</h2>
      </div>
      <div className={[`${styles.card} ${styles.cardUsersBg}`]}>
        <UsersIcon className={styles.icon}/>
        <h4 className={styles.categoryName}>Users</h4>
        <h2 className={styles.number}>3</h2>
      </div>
    </div>
  );
};

export default HomeComp;
