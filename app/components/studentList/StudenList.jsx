"use client";
import React, { useEffect, useState } from "react";
import UserCard from "../userCard/UserCard";
import styles from "./styles.module.css";
import { SearchIcon } from "../../../public/icons";

const StudenList = () => {
  const [student, setStudent] = useState([]);

  const getUsers = async () => {
    let students = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );
    console.log(students.users);
    setStudent(students.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(student);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.headerText}>Student List</h3>
        <div className={styles.inputContainer}>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search.."
          />
          <SearchIcon className={styles.searchIcon} />
          <button className={styles.btn}>ADD NEW ACCOUNT</button>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <ul className="flex justify-between items-center p-[30px]">
          <li className={styles.fieldEmpty}></li>
          <li className={styles.fieldText}>Name</li>
          <li className={styles.fieldText}>Email</li>
          <li className={styles.fieldText}>Phone</li>
          <li className={styles.fieldText}>Website</li>
          <li className={styles.fieldText}>Company Name</li>
          <li className={styles.fieldText}></li>          
        </ul>
        {student?.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default StudenList;
