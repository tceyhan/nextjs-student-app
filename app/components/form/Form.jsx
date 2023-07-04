"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Form = ({ openModal, setOpenModal, setUpdateModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://dummyjson.com/users/${params.id}`, user);
      setUpdateModal(false);
    } catch (error) {
      return console.log(error);
    }
  };
  const inputRef = useRef(null);
  // Her karakter girildiğinde inputa odaklanmak için useEffect kullanalım.
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
                 ref={inputRef}
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
                <Button className="bg-[#FEAF00] w-full" type="submit">
                  <p className="text-black text-lg font-bold">ADD</p>
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Form;
