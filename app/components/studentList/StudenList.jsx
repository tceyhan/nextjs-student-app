"use client";
import React, { useEffect, useState } from "react";
import UserCard from "../userCard/UserCard";
import styles from "./styles.module.css";
import { SearchIcon } from "../../../public/icons";
import ModalForm from "../toggleModal/ModalForm";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  domain: "",
  company: "",
};

const StudenList = () => {
  const [student, setStudent] = useState([]);
  const [openModal, setOpenModal] = useState();
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(initialValues);
  const [searchValue, setSearchValue] = useState("")

  console.log(value);

  const getUsers = async () => {
    let students = await fetch("https://dummyjson.com/users/").then(
      (res) => res.json()
    );
    console.log(students.users);
    setStudent(students.users);
  };

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
//! filter metodu içeriden map ederken kullanıldı buna şimdilik gerek kalmadı.

//? USER DELETE FUNCTİON
const handleRemoveUser = userId => {
  const filteredUserList = student.filter(item => item.id !== userId);
  // console.log(filteredUserList);
  setStudent(filteredUserList);
};

  useEffect(() => {
    getUsers();   
  }, []);

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
            onChange={(e)=> setSearchValue(e.target.value)}
          />
          <SearchIcon className={styles.searchIcon} />
          <button
            className={styles.btn}
            onClick={() => {
              setOpenModal("form-elements");
              setModal(true);
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
        {student?.filter((item) =>{
          return searchValue.toLowerCase() === "" ? item : item.firstName.toLowerCase().includes(searchValue)
        } ).map((user) => (
          <UserCard user={user} key={user.id} handleRemoveUser={handleRemoveUser}/>
        ))}
      </div>
      <div>
        {modal && (
          <ModalForm
            openModal={openModal}
            setOpenModal={setOpenModal}
            value={value}
            setValue={setValue}
            initialValues={initialValues}
            setModal={setModal}
          />
        )}
      </div>
    </div>
  );
};

export default StudenList;
