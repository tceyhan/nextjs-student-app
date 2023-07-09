"use client";

import React from "react";
import { PlayLeftIcon, BellIcon } from "public/icons";
import styles from "./styles.module.css";

const TopComp = () => {
  return (
    <div className={styles.container}>
      <PlayLeftIcon className={styles.leftIcon} />
      <BellIcon className={styles.bellIcon} />
    </div>
  );
};

export default TopComp;
