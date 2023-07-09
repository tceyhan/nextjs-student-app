"use client";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  domain: "",
  company: "",
};

const ModalForm = ({ setModal, userUp, student, setStudent }) => {
  const [createAndUpdateData, setCreateAndUpdateData] = useState(initialValue);
  console.log(student.length);

  useEffect(() => {
    if (!!userUp) {
      setCreateAndUpdateData(userUp);
    } else {
      setCreateAndUpdateData(initialValue);
    }
  }, [userUp]);
  console.log(userUp);

  const onChange = (e) => {
    const { name, value } = e.target;
    setCreateAndUpdateData({ ...createAndUpdateData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      id:student.length+1,
      firstName: createAndUpdateData.firstName,
      lastName: createAndUpdateData.lastName,
      email: createAndUpdateData.email,
      phone: createAndUpdateData.phone,
      domain: createAndUpdateData.domain,
      company: createAndUpdateData.company,
    };

    console.log("modal user",user);
    if (!userUp) {
      try {
        await axios.post(`https://dummyjson.com/users/add`, user);
        await setStudent([...student, user]);
        setModal(false);
      } catch (error) {
        return console.log(error);
      }
    } else {
      try {
        await axios.put(`https://dummyjson.com/users/${userUp.id}`, user);
        await setStudent([...student, { ...userUp,...user }]);
        setModal(false);
      } catch (error) {
        return console.log(error);
      }
    }
  };
  console.log(createAndUpdateData);
  return (
    <div className="fixed inset-0  flex flex-col justify-center items-center bg-black bg-opacity-40 z-50">
      <div className="space-y-6 flex flex-row items-center justify-between bg-white rounded-lg p-8 w-96">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {userUp === null ? "Add New User" : "Update User"}
        </h3>
        <button
          onClick={() => {
            setModal(false);
          }}
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
              name="firstName"
              placeholder="Enter first name.."
              value={createAndUpdateData.firstName}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastname" value="Last Name" />
            </div>
            <TextInput
              id="lastname"
              name="lastName"
              placeholder="Enter last name.."
              value={createAndUpdateData.lastName}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              name="email"
              placeholder="name@company.com"
              value={createAndUpdateData.email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone" />
            </div>
            <TextInput
              id="phone"
              name="phone"
              type="phone"
              value={createAndUpdateData.phone}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="website" value="Web Site" />
            </div>
            <TextInput
              id="website"
              name="domain"
              value={createAndUpdateData.domain}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="company" value="Company" />
            </div>
            <TextInput
              id="company"
              name="company"
              value={createAndUpdateData.company.name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="flex items-center justify-center mt-2">
            <Button
              className="bg-[#FEAF00] w-full hover:bg-[#FEDF00]"
              type="submit"
            >
              <p className="text-black text-lg font-bold">
                {" "}
                {userUp === null ? "ADD" : "UPDATE"}
              </p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
