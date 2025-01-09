import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setRidePopUpPanel(false)}
        className="p-1 absolute w-[93%] text-center top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
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
        <div className="flex items-center justify-between gap-2 w-full">
          <button
            onClick={() => props.setConfirmRidePopUpPanel(true)}
            className="bg-green-600 w-full text-white font-semibold p-2 px-4 rounded-lg"
          >
            Accept
          </button>
          <button
            onClick={() => props.setRidePopUpPanel(false)}
            className="bg-gray-300 w-full text-gray-800 font-semibold p-2 px-4 rounded-lg"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;