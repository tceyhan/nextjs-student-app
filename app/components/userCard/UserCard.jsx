"use client";

import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { DeleteIcon, EditIcon } from "../../../public/icons";

const UserCard = ({ user }) => {
  return (
    <ul className={styles.container}>
      <li className={styles.Img}>
        <Image src={user.image} alt={user.firstName} width={60} height={60} />
      </li>
      <li className={styles.field}>
        {user.firstName} {user.lastName}
      </li>
      <li className={styles.field}>{user.email}</li>
      <li className={styles.field}>{user.phone}</li>
      <li className={styles.field}>{user.domain}</li>
      <li className={styles.field}>{user.company.name}</li>
      <li className={styles.fieldIcon}><EditIcon/> <DeleteIcon/></li>
     
    </ul>
  );
};

export default UserCard;
