import React from "react";
import AsideMenu from "../components/asideMenu/AsideMenu";
import TopComp from "../components/topComponent/TopComp";

function DashBoardLayout({ children }) {
  console.log(children);
  return (
    <div className="flex  items-start justify-star">
      <AsideMenu  className="flex"/>
      <div className="flex flex-col">
        <TopComp />
        {children}
      </div>
    </div>
  );
}

export default DashBoardLayout;
