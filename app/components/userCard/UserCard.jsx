"use client";

import Image from "next/image";
import React from "react";

const UserCard = ({ user }) => {
 
  return (
    <div className="flex justify-between ">
      <Image src={user.image} alt={user.firstName} width={64} height={110} />
      <h6>{user.firstName} {user.lastName}</h6>
      <h6>{user.email}</h6>
      <h6>{user.phone}</h6>
      <h6>{user.domain}</h6>
      <h6>{user.company.name}</h6>
    </div>
  );
};

export default UserCard;
