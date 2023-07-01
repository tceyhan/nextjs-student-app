"use client";

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import avatar from "../../../public/images/avatar.png";
import LineComp from "../LineComp";
import {
  Bookmark,
  Graduation,
  Home,
  Logout,
  Report,
  Settings,
  UsdSquare,
} from "../../../public/icons";
import Link from "next/link";

const AsideMenu = () => {
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <LineComp className="mr-2 h-[20px]" />
        <h4 className="text-[20px] font-bold">MANAGE COURSES</h4>
      </div>
      <div className={styles.avatarContainer}>
        <Image
          className={styles.img}
          src={avatar}
          alt="avatar"
          priority={false}
        />
        <h4 className={styles.name}>John Doe</h4>
        <h5 className={styles.position}>Admin</h5>
      </div>
      <div className={styles.menuContainer}>
        <Link className={styles.menu} href="/home">
          <Home className={styles.icon} />
          <h6 className={styles.menuName}>Home</h6>
        </Link>
        <Link className={styles.menu} href="/course">
          <Bookmark className={styles.icon} />
          <h6 className={styles.menuName}>Course</h6>
        </Link>
        <Link className={styles.menu} href="/students">
          <Graduation className={styles.icon} />
          <h6 className={styles.menuName}>Students</h6>
        </Link>
        <Link className={styles.menu} href="/payment">
          <UsdSquare className={styles.icon} />
          <h6 className={styles.menuName}>Payment</h6>
        </Link>
        <Link className={styles.menu} href="/report">
          <Report className={styles.icon} />
          <h6 className={styles.menuName}>Report</h6>
        </Link>
        <Link className={styles.menu} href="/settings">
          <Settings className={styles.icon} />
          <h6 className={styles.menuName}>Settings</h6>
        </Link>
      </div>
      <div className={styles.logoutContainer}>
        <Link className={styles.menu} href="/logout">
          <h6 className={styles.logout}>Logout</h6>
          <Logout className={styles.iconLogout} />
        </Link>
      </div>
    </div>
  );
};

export default AsideMenu;