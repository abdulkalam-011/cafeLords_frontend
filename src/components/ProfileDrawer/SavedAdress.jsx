import React from "react";

const SavedAdress = () => {
  return (
    <div className="w-full h-full p-10 overflow-y-auto overflow-x-hidden">
      <h1>
        <b>Manage Addresses</b>
      </h1>
      <div className=" bg-gray-400 w-full overflow-hidden  mt-10 rounded p-10">
        <button type="button" className="px-3 py-2 bg-blue-600 rounded text-white"> Use My current Location</button>
        <form className="w-3/4 overflow-hidden">
        <div className="flex gap-5 flex-wrap ">
          <span className="w-80 justify-between items-center bg-white py-2 flex gap-3 rounded mt-5  px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
            <input className="w-full" type="text" placeholder="Name" />
          </span>
          <span className="w-80 justify-between items-center bg-white  flex py-2  gap-3 rounded mt-5  px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
            <input className="w-full" type="text" placeholder="Mobile Number" />
          </span>
          <span className="w-80 justify-between items-center bg-white  flex py-2  gap-3 rounded  px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
            <input className="w-full" type="text" placeholder="pincode" />
          </span>
          <span className="w-80 justify-between items-center bg-white  flex py-2 gap-3 rounded  px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
            <input className="w-full" type="text" placeholder="Locality" />
          </span>
        </div>
        <div className="w-full">
          <span className=" w-full justify-between items-center bg-white flex gap-3 rounded mt-5 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
            <textarea
              name="address"
              id=""
              placeholder="Address (area & street)"
              className="w-full px-3 py-2 resize-none"
            ></textarea>
          </span>
        </div>
        <div className="flex gap-5 flex-wrap">
          <span className="w-80 justify-between items-center bg-white py-2 flex gap-3 rounded mt-5  px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
            <input className="w-full" type="text" placeholder="city" />
          </span>
          <span className="w-80 justify-between items-center bg-white  flex py-2  gap-3 rounded mt-5  px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
          <select
            class="OZuttk ACw3Xy O1czOX SWXSwy"
            name="state"
            required=""
            tabindex="7"
            fdprocessedid="iimosi"
          >
            <option value="" disabled="">
              --Select State--
            </option>
            <option value="Andaman &amp; Nicobar Islands">
              Andaman &amp; Nicobar Islands
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu">
              Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          </span>
          <span className="w-80 justify-between items-center bg-white  flex py-2  gap-3 rounded  px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
            <input className="w-full" type="text" placeholder="Landmark (optional)" />
          </span>
          <span className="w-80 justify-between items-center bg-white  flex py-2 gap-3 rounded  px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
            <input className="w-full" type="text" placeholder="Alternate Phone (optional)" />
          </span>
        </div>

        <input type="submit"  value="Save Address" className="mt-10 px-3 py-2 rounded bg-yellow-200 text-xl"/>
      </form>
      </div>
    </div>
  );
};

export default SavedAdress;
