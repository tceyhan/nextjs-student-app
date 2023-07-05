"use client";

import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { DeleteIcon, EditIcon } from "../../../public/icons";

const UserCard = ({ user, handleRemoveUser, handleUpdateUser }) => {
  let { id,firstName, lastName, email, phone, domain, company, image } = user;

  return (
    <ul className={styles.container}>
      <li className={styles.Img}>
        <Image
          src={image ?? "https://gravatar.com/avatar/5c81c1c983c3d492be44bdb09d8586a9?s=200&d=robohash&r=x"}
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
      <li className={styles.field}>{company?.name??"company name"}</li>
      <li className={styles.fieldIcon}>
        <EditIcon onClick={() => handleUpdateUser(id)} /> <DeleteIcon onClick={() => handleRemoveUser(id)}/>
      </li>
    </ul>
  );
};

export default UserCard;
