"use client";
import React, { useEffect, useState } from "react";
import UserCard from "../userCard/UserCard";

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
    <div>
      <div className="flex justify-between">
        <h3>Student List</h3>
        <input type="search" />
        <button>ADD NEW ACCOUNT</button>
      </div>
      <div className="flex flex-col">
        <ul className="flex justify-between">
          <li></li>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Website</li>
          <li>Company Name</li>
          <li></li>
          <li></li>
        </ul>
        <div className="flex flex-col justify-between">
          {student?.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudenList;
