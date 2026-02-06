import React, { useCallback } from "react";
import { MdMyLocation, MdSave } from "react-icons/md";

const SavedAddress = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Logic to save address goes here
    console.log("Address Saved");
  }, []);

  const handleUseLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Lat:", position.coords.latitude, "Lng:", position.coords.longitude);
        // Logic to reverse geocode and fill form goes here
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-8 ">
      {/* Header */}
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Manage Addresses</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
        
        {/* Location Button */}
        <button
          type="button"
          onClick={handleUseLocation}
          className="w-full md:w-auto mb-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 focus:ring-4 focus:ring-blue-300"
        >
          <MdMyLocation /> Use My Current Location
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Grid Container for Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                autoComplete="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all"
                required
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-2">
              <label htmlFor="mobile" className="text-sm font-semibold text-gray-700">Mobile Number</label>
              <input
                id="mobile"
                type="tel"
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                maxLength="10"
                autoComplete="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all"
                required
              />
            </div>

            {/* Pincode */}
            <div className="flex flex-col gap-2">
              <label htmlFor="pincode" className="text-sm font-semibold text-gray-700">Pincode</label>
              <input
                id="pincode"
                type="text"
                pattern="[0-9]{6}"
                maxLength="6"
                placeholder="6-digit Pincode"
                autoComplete="postal-code"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all"
                required
              />
            </div>

            {/* Locality */}
            <div className="flex flex-col gap-2">
              <label htmlFor="locality" className="text-sm font-semibold text-gray-700">Locality</label>
              <input
                id="locality"
                type="text"
                placeholder="Locality"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Textarea (Full Width) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-sm font-semibold text-gray-700">Address (Area and Street)</label>
            <textarea
              id="address"
              rows="3"
              placeholder="Flat no., building, street, etc."
              autoComplete="street-address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all resize-none"
              required
            ></textarea>
          </div>

          {/* Grid Container 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* City */}
            <div className="flex flex-col gap-2">
              <label htmlFor="city" className="text-sm font-semibold text-gray-700">City / District / Town</label>
              <input
                id="city"
                type="text"
                placeholder="City"
                autoComplete="address-level2"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all"
                required
              />
            </div>

            {/* State Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="state" className="text-sm font-semibold text-gray-700">State</label>
              <select
                id="state"
                name="state"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all bg-white"
              >
                <option value="" disabled selected>--Select State--</option>
                <option value="Andaman & Nicobar Islands">Andaman & Nicobar Islands</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
                {/* Add remaining states as needed */}
              </select>
            </div>

            {/* Landmark */}
            <div className="flex flex-col gap-2">
              <label htmlFor="landmark" className="text-sm font-semibold text-gray-700">Landmark (Optional)</label>
              <input
                id="landmark"
                type="text"
                placeholder="E.g. Near Apollo Hospital"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all"
              />
            </div>

            {/* Alt Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="altPhone" className="text-sm font-semibold text-gray-700">Alternate Phone (Optional)</label>
              <input
                id="altPhone"
                type="tel"
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                maxLength="10"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 focus:ring-4 focus:ring-yellow-300"
            >
              <MdSave className="text-xl" /> Save Address
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SavedAddress;