"use client";

import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
const CreateForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    domain: "",
    company: "",
  };
  const [value, setValue] = useState(initialValues);
  const router = useRouter();
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log("change", value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit", value);
    try {
      await axios.post("https://dummyjson.com/users/add", value);     
      setValue("");
      router.push("/dashboard/student")
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#feaf00] to-[#f8d442]">
      <form
        onSubmit={handleSubmit}
        className="box-content flex flex-col gap-4 bg-white w-[475px] h-[550px] rounded-[20px] shadow-[2px_5px_10px_0px_rgba(0, 0, 0, 0.1)] py-11 px-[30px]"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Add New Account
        </h3>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstname" value="First Name" />
          </div>
          <TextInput
            name="firstName"
            id="firstname"
            placeholder="Enter first name.."
            value={value?.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastname" value="Last Name" />
          </div>
          <TextInput
            name="lastName"
            id="lastname"
            placeholder="Enter last name.."
            value={value?.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            name="email"
            id="email"
            placeholder="name@company.com"
            value={value?.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Phone" />
          </div>
          <TextInput
            name="phone"
            id="phone"
            type="phone"
            value={value?.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="website" value="Web Site" />
          </div>
          <TextInput
            name="domain"
            id="website"
            value={value?.domain}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="company" value="Company" />
          </div>
          <TextInput
            name="company"
            id="company"
            value={value?.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center mt-2">
          <Button
            className="w-full"
            type="submit"
          >
            <p className="text-black text-lg font-bold">ADD</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
