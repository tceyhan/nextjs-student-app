"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import axios from "axios";

const ModalForm = ({
  openModal,
  setOpenModal,
  value,
  setValue,
  initialValues,
  setModal
}) => {
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log();
    try {
      await axios.post("https://dummyjson.com/users/add", value);
      setValue(initialValues);
      setModal(false)      
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
            <h3 className="text-xl font-medium font-semibold text-gray-900 dark:text-white">
              Add New Account
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
                  value={value.firstName}
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
                  value={value.lastName}
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
                  value={value.email}
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
                  value={value.phone}
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
                  value={value.domain}
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
                  value={value.company}
                  onChange={handleChange}
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

export default ModalForm;
