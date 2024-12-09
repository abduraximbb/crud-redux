import React from "react";
import { useSelector } from "react-redux";
import { deleteUser } from "../../redux/slices/user-clise";
import { useDispatch } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.value);
  const usersItems = users?.map((item) => (
    <div
      key={item.id}
      className=" text-center border-blue-300 rounded-lg border-2 py-4 bg-[#516091] text-[#74bec1]"
    >
      <h3>Name: {item.name}</h3>
      <p>Email: {item.email}</p>
      <p>Age: {item.age}</p>
      <p>Profession: {item.profession}</p>
      <p>Gender: {item.gender}</p>
      <div className="flex mx-auto gap-4 w-[80%] justify-evenly">
        <button
          onClick={() => dispatch(deleteUser(item))}
          className="border-2 rounded-lg px-2 text-[#8b4f80] bg-[#b9c0d5] hover:bg-slate-400"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className=" bg-gradient-to-r from-purple-600 via-green-400 to-purple-500 min-h-[100vh] py-6">
      <div className="w-[70%] mx-auto text-center font-poppins">
        <h2 className="text-[40px] font-[500]">Users</h2>
        <div className="grid gap-7 grid-cols-4 mt-[60px] max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:grid-cols-1">
          {usersItems}
        </div>
      </div>
    </div>
  );
};

export default Users;
