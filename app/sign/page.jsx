"use client";

import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import LineComp from "../../assets/LineComp";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#feaf00] to-[#f8d442]">
      <form className="box-content flex flex-col gap-4 bg-white w-[475px] h-[550px] rounded-[20px] shadow-[2px_5px_10px_0px_rgba(0, 0, 0, 0.1)] py-11 px-[30px]">
        <div className="flex flex-row items-center justify-center my-11 mx-4">
          <LineComp className="mr-2" />
          <h4 className="text-2xl font-bold">MANAGE COURSES</h4>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-[22px] font-semibold">SIGN IN</h5>
          <p className="text-[14px] text-[#6C6C6C] mt-2">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="mb-7">
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Email"
              className="text-sm font-medium"
            />
          </div>
          <TextInput
            className="placeholder:text-[#CDCDCD] bg-[#FFF] rounded border-solid border-[#E5E5E5]"
            id="email1"
            placeholder="Enter your email"
            required
            type="email"
          />
        </div>
        <div className="mb-7">
          <div className="mb-2 block text-sm font-medium">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput
            className="placeholder:text-[#CDCDCD] bg-[#FFF] rounded border-solid border-[#E5E5E5]"
            id="password1"
            required
            type="password"
            placeholder="Enter your password"
          />
        </div> 
        <Button className="bg-[#FEAF00] hover:bg-[#FEAF00 text-sm] rounder mb-[30px] "type="submit">SIGN IN</Button>
        <div className="flex flex-row items-center justify-center">
          <p className="text-[14px] text-[#6C6C6C] mr-1">Forget your password?</p>
          <Link href="http://" className="text-[14px] text-[#FEAF00] underline font-semibold">
            Reset Password
          </Link>
        </div>
      </form>
    </div>
  );
}
