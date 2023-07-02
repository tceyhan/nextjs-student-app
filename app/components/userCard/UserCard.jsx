"use client";

import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { DeleteIcon, EditIcon } from "../../../public/icons";

const UserCard = ({ user }) => {
  const { firstName, lastName, email, phone, domain, company, image } = user;
  return (
    <ul className={styles.container}>
      <li className={styles.Img}>
        <Image
          src={image}
          alt={firstName ?? "avatar"}
          width={60}
          height={60}
        />
      </li>
      <li className={styles.field}>
        {firstName ?? ""} {lastName ?? ""}
      </li>
      <li className={styles.field}>{email ?? ""}</li>
      <li className={styles.field}>{phone ?? ""}</li>
      <li className={styles.field}>{domain ?? ""}</li>
      <li className={styles.field}>{company.name ?? ""}</li>
      <li className={styles.fieldIcon}>
        <EditIcon /> <DeleteIcon />
      </li>
    </ul>
  );
};

export default UserCard;
