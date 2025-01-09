import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h5
        onClick={() => props.setConfirmRidePopUpPanel(false)}
        className="p-1 absolute w-[93%] text-center top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this Ride to Start
      </h3>
      <div className="flex items-center justify-between p-4 mt-4 border-2 border-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">Janvi Bhalani</h2>
        </div>
        <h5 className="text-xl font-semibold">2.2 Km</h5>
      </div>
      <div className="flex gap-2 items-center justify-between flex-col">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kakariya Talab, Ahemadabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kakariya Talab, Ahemadabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              placeholder="Enter OTP"
              className="bg-[#eee] py-4 px-6 font-mono text-lg rounded-lg w-full mt-3"
            />
            <Link
              to="/captain-riding"
              className="w-full mt-5 flex justify-center items-center bg-green-600 text-white text-center text-lg font-semibold p-2 rounded-lg"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className="w-full mt-4 bg-red-600 text-white font-semibold p-2 rounded-lg text-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
