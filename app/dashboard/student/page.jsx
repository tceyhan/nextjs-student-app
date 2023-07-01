import React from "react";
import AsideMenu from "../../components/asideMenu/asideMenu";
import TopComp from "../../components/topComponent/TopComp";
import StudentList from "../../components/studentList/StudenList";

const Student = () => {
  return (
    <div className="flex">
      <AsideMenu />
      <div className="flex flex-col">
        <TopComp />
        <StudentList />
      </div>
    </div>
  );
};

export default Student;
