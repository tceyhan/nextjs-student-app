import React from "react";
import { ListGroup } from "flowbite-react";
import {
  HiOutlineHome,
  HiOutlineBookmark,
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentReport,
  HiOutlineAdjustments,
} from "react-icons/hi";

const MenuIconsList = () => {
  return (
    <div className="w-[193px]">
      <ListGroup className="w-[193px]">
        <ListGroup.Item icon={HiOutlineHome} active className="w-[193px]">
          Home
        </ListGroup.Item>
        <ListGroup.Item icon={HiOutlineBookmark}>Course</ListGroup.Item>
        <ListGroup.Item icon={HiOutlineAcademicCap}>Students</ListGroup.Item>
        <ListGroup.Item icon={HiOutlineCurrencyDollar}>Payment</ListGroup.Item>
        <ListGroup.Item icon={HiOutlineDocumentReport}>Report</ListGroup.Item>
        <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default MenuIconsList;
