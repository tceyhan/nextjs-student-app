import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const MenuItem = ({ menuName }) => {
  return (
    <div className={styles.url}>
      <Link href={menuName}>{menuName}</Link>
    </div>
  );
};

export default MenuItem;
