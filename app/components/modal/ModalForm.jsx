"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

const ModalForm = ({ setModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {
    const user = {
      firstName,
      lastName,
      email,
      phone,
      domain,
      company,
    };
    e.preventDefault();
    console.log(user);
    try {
      await axios.post(`https://dummyjson.com/users/add`, user);
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="fixed inset-0  flex flex-col justify-center items-center bg-black bg-opacity-40 z-50">
      <div className="space-y-6 flex flex-row items-center justify-between bg-white rounded-lg p-8 w-96">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Add New User
        </h3>
        <button
          onClick={() => setModal(false)}
          className="flex  px-2 py-2 bg-[#FEAF00]  text-black rounded"
        >
          X
        </button>
      </div>
      <div className="bg-white rounded-lg p-8 w-96">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstname" value="First Name" />
            </div>
            <TextInput
              id="firstname"
              placeholder="Enter first name.."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastname" value="Last Name" />
            </div>
            <TextInput
              id="lastname"
              placeholder="Enter last name.."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone" />
            </div>
            <TextInput
              id="phone"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="website" value="Web Site" />
            </div>
            <TextInput
              id="website"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              // required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="company" value="Company" />
            </div>
            <TextInput
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center mt-2">
            <Button className="bg-[#FEAF00] w-full hover:bg-[#FEDF00]" type="submit">
              <p className="text-black text-lg font-bold">ADD</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
