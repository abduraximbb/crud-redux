import React, { useRef, useState } from "react";
import { addUser } from "../../redux/slices/user-clise";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const CreateUser = () => {
  const dispatch = useDispatch();

  const name = useRef("");
  const email = useRef("");
  const age = useRef(null);
  const profession = useRef("");
  const [gender, setGender] = useState("Male");

  const handleSubmit = (event) => {
    event.preventDefault();

    let newUser = {
      id: uuidv4(),
      name: name.current.value,
      email: email.current.value,
      age: age.current.value,
      profession: profession.current.value,
      gender,
    };

    dispatch(addUser(newUser));
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-purple-600 via-green-400 to-purple-500 h-screen pt-14"
    >
      <form
        action=""
        className="border-2 rounded-lg flex flex-col justify-center items-center w-[40%] gap-5 mx-auto p-14 bg-[#516091]"
      >
        <h2 className="text-[#74bec1] text-2xl">Create new user</h2>
        <input
          ref={name}
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-200"
          required
        />
        <input
          ref={email}
          type="text"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-200"
          required
        />
        <input
          ref={age}
          type="number"
          placeholder="Enter your age"
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-200"
          required
        />
        <input
          ref={profession}
          type="text"
          placeholder="Enter your profession"
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-200"
          required
        />
        <div className="flex items-center space-x-6 justify-center gap-5 flex-col">
          <p className="text-[#74bec1]">Choose your gender</p>
          <div className="flex justify-evenly w-full gap-8 mx-auto">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="form-radio text-blue-600 h-5 w-5"
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
              />
              <span className="ml-2 text-[#74bec1] ">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="form-radio text-blue-600 h-5 w-5"
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
              />
              <span className="ml-2 text-[#74bec1]">Female</span>
            </label>
          </div>
        </div>
        <button className="border-2 rounded-lg w-full py-3 text-[#8b4f80] bg-[#b9c0d5] text-xl hover:bg-slate-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
