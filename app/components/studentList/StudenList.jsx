"use client";
import React, { useEffect, useState } from "react";
import UserCard from "../userCard/UserCard";
import styles from "./styles.module.css";
import { ArrowLeft, ArrowRight, SearchIcon } from "../../../public/icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import ModalForm from "../modal/ModalForm";


const StudenList = () => {
  const [student, setStudent] = useState([]);
  const [modal, setModal] = useState(false); 
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(6);
  const [all, setAll] = useState();
  const [userUp, setUserUp] = useState();

  const router = useRouter();

  const getAllUsers = async () => {
    let users = await fetch("https://dummyjson.com/users/").then((res) =>
      res.json()
    );

    console.log("all", users);
    setAll(users.limit);
  };
  const getUsers = async () => {
    let students = await fetch(
      `https://dummyjson.com/users?limit=${page}`
    ).then((res) => res.json());
    console.log(students.users);
    setStudent(students.users);
  };

  //! filter metodu içeriden map ederken kullanıldı buna şimdilik gerek kalmadı.
  //   const handleSearch =  () => {
  //     let filteredList = student.filter((user)=>{
  //       const searchedText = searchValue.toLowerCase();
  //       const name = user.firstName.toLowerCase();
  //       const surname = user.lastName.toLowerCase();
  //       let res1 = name.indexOf(searchedText) > -1
  //       let res2 = surname.indexOf(searchedText) > -1
  //       if(res1 || res2) {
  //         return user;
  //       }else {
  //         return console.log("no user feature")
  //       }
  //     })
  //     console.log(filteredList)
  //     setStudent(filteredList);
  // }

  //? USER DELETE
  const handleRemoveUser = async (userId) => {
    const filteredUserList = student.filter((item) => item.id !== userId);
    // console.log(filteredUserList);
    await axios.delete(`https://dummyjson.com/users/${userId}`);
    setStudent(filteredUserList);
  };

  //? USER UPDATE
  const handleUpdateUser = async (userId) => {
    setModal(true);
      const filteredUser = student.find((item) => item.id == userId);
      console.log(filteredUser);
      setUserUp(filteredUser); 
   
  };

  const increasePage = () => {
    return setPage(page + 1);
  };
  const decreasePage = () => {
    return page === 0 ? setPage(0) : setPage(page - 1);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [page]);
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
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchIcon className={styles.searchIcon} />
          <button
            className={styles.btn}
           
            onClick={() => {
              setModal(true)
              setUserUp(null); 
            }}
          >
            NEW ACCOUNT
          </button>
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
        {student
          ?.filter((item) => {
            return searchValue.toLowerCase() === ""
              ? item
              : item.firstName.toLowerCase().includes(searchValue);
          })
          .map((user) => (
            <UserCard
              user={user}
              key={user.id}
              handleRemoveUser={handleRemoveUser}
              handleUpdateUser={handleUpdateUser}
            />
          ))}
      </div>
      <div className="flex flex-row justify-end items-center">
        <h6 className={styles.pagiText}>
          Rows per page :
          <select
            onChange={(e) => setPage(e.target.value)}
            className="mr-[48px] border-none bg-[#F8F8F8] text-[#4B506D] text-[14px] "
          >
            <option className={styles.option} value="6">
              6
            </option>
            <option className={styles.option} value="12">
              12
            </option>
            <option className={styles.option} value="18">
              18
            </option>
            <option className={styles.option} value="24">
              24
            </option>
            <option className={styles.option} value="30">
              30
            </option>
          </select>
        </h6>
        <p className={styles.pagiText}>
          1-{page} of {all}
        </p>
        <ArrowLeft onClick={decreasePage} />
        <ArrowRight onClick={increasePage} />
      </div>
      <div>{modal && <ModalForm setModal={setModal} userUp={userUp}/>}</div>
     
    </div>
  );
};

export default StudenList;
