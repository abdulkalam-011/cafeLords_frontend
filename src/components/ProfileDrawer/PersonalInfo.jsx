import React, { useCallback, useState } from "react";
import {  useSelector } from "react-redux";
import { MdDelete, MdEdit, MdSave, MdClose } from "react-icons/md";
import { toast } from "react-toastify"; // Assuming you use toastify based on context

const PersonalInfo = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const [isReadOnly, setIsReadOnly] = useState(true);
  
  // Local state for form fields
  const [formData, setFormData] = useState({
    fullname: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: "",
  });

  // Optimized Handler for all inputs
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Toggle Edit Mode
  const toggleEdit = useCallback(() => {
    setIsReadOnly((prev) => !prev);
  }, []);

  // Handle Save
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setIsReadOnly(true);
    // Dispatch update action here
    console.log("Saving data:", formData);
    toast.success("Profile updated successfully!");
  }, [formData]);

  // Handle Delete
  const handleDeleteAccount = useCallback(() => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      console.log("Deleting account...");
      // dispatch(deleteAccountAction());
    }
  }, []);

  const inputClass = `w-full rounded-lg px-4 py-3 transition-all outline-none border-2 ${
    isReadOnly 
      ? "bg-gray-50 border-transparent text-gray-500 cursor-not-allowed" 
      : "bg-white border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-gray-900"
  }`;

  return (
    <div className="w-full  ">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Personal Information</h1>
        <button
          onClick={toggleEdit}
          className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 focus:outline-none focus:underline"
          aria-label={isReadOnly ? "Edit personal information" : "Cancel editing"}
        >
          {isReadOnly ? <><MdEdit /> Edit</> : <><MdClose /> Cancel</>}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullname" className="text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter your full name"
            autoComplete="name"
            className={inputClass}
            readOnly={isReadOnly}
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@example.com"
            autoComplete="email"
            className={inputClass}
            readOnly={isReadOnly}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel" 
            name="phone"
            id="phone"
            maxLength={10}
            pattern="[0-9]{10}"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            className={inputClass}
            readOnly={isReadOnly}
            value={formData.phone}
            onChange={(e) => {
              // Only allow numbers
              const val = e.target.value.replace(/\D/g, ""); 
              setFormData((prev) => ({ ...prev, phone: val }));
            }}
          />
        </div>

        {/* Action Buttons */}
        {!isReadOnly && (
          <div className="pt-4 animate-fade-in">
            <button 
              type="submit" 
              className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 focus:ring-4 focus:ring-blue-300"
            >
              <MdSave className="text-xl" /> Save Changes
            </button>
          </div>
        )}
      </form>

      {/* Danger Zone */}
      <div className="mt-16 pt-8 border-t border-red-100">
        <h2 className="text-red-600 font-bold mb-2">Danger Zone</h2>
        <p className="text-sm text-gray-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <button
          type="button"
          onClick={handleDeleteAccount}
          className="w-full md:w-auto px-6 py-3 border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 hover:border-red-300 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 focus:ring-4 focus:ring-red-100"
        >
          <MdDelete className="text-xl" /> Delete Account
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;