import { current } from "@reduxjs/toolkit";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  console.log(currentUser);

  const [isReadOnly, setisReadOnly] = useState(true);
  const [fullname, setfullname] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [phone, setphone] = useState('');

// handlers 
const handleEdit = useCallback(()=>{
  setisReadOnly(prev => !prev)
})
  return (
    <div className="w-full h-full py-3 px-10 ">
      <h1 className="text-lg">
        <b> Personal Information</b>
      </h1>
      <form>
        <label htmlFor="fullname" className="block mt-5 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="full name"
          className={`bg-gray-100 rounded p-2 w-fit  ${
            isReadOnly ? "opacity-50" : "opacity-100"
          }`}
          readOnly={isReadOnly}
          value={fullname}
        />

        <label htmlFor="email" className="mt-5 mb-2 block">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="full name"
          onChange={e => setEmail(e.target.value)}
          className={`bg-gray-100 rounded p-2 w-fit  ${
            isReadOnly ? "opacity-50" : "opacity-100"
          }`}
          readOnly={isReadOnly}
          value={email}
        />
        <label htmlFor="Phone" className="mt-5 mb-2 block">
          Mobile Number
        </label>
        <input
          type="number"
          name="phone"
          maxLength='10'
          id="phone"
          value={phone}
          onChange={e => setphone(e.target.value)}
          placeholder="Mobile Number "
          className={`bg-gray-100 rounded p-2 w-60  ${
            isReadOnly ? "opacity-50" : "opacity-100"
          }`}
          readOnly={isReadOnly}
        />
        <div className="mt-10 flex items-center justify-start gap-10 ">
          <button type="button" className="bg-blue-400 px-4 py-2 rounded-lg " onClick={handleEdit} name="edit personal details"> Edit</button>
          <input type="submit" value="Save" className="bg-yellow-200 px-4 py-2 rounded-lg "/>
        </div>
      </form>

      <button type="button" className="bg-red-400 px-4 py-2 rounded-lg mt-40">Delete Account</button>
    </div>
  );
};

export default PersonalInfo;
