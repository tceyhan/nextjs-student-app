import React from "react";
import AsideMenu from "../components/asideMenu/asideMenu";
import TopComp from "../components/topComponent/TopComp";
import HomeComp from "../components/homeComp/HomeComp";

const Dashboard = () => {
  return (
    <div className="flex">
      <AsideMenu />
      <div className="flex flex-col">
        <TopComp />
        <HomeComp />
      </div>
    </div>
  );
};

export default Dashboard;
