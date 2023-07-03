"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import axios from "axios";
import { useState } from "react";

const UpdateModalForm = ({
  openModal,
  setOpenModal,
  setUpdateModal,
  user,
  setUser,
}) => {
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://dummyjson.com/users/${params.id}`, user);

      setUpdateModal(false);
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <>
      <Modal
        show={openModal === "form-elements"}
        size="md"
        popup
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Update User
            </h3>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="firstname" value="First Name" />
                </div>
                <TextInput
                  name="firstName"
                  id="firstname"
                  placeholder="Enter first name.."
                  value={user?.firstName}
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
                  value={user?.lastName}
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
                  value={user?.email}
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
                  value={user?.phone}
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
                  value={user?.domain}
                  onChange={handleChange}
                  // required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="company" value="Company" />
                </div>
                <TextInput
                  name="company"
                  id="company"
                  value={user?.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-center mt-2">
                <Button className="bg-[#FEAF00] w-full" type="submit">
                  <p className="text-black text-lg font-bold">UPDATE</p>
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateModalForm;
