import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setWaitingForDriver(false)}
        className="p-1 absolute w-[93%] text-center top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>

      <div className="flex items-center gap-2 justify-between">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1569015390/assets/fa/0e26a9-9d9d-4190-ad6d-a879ccef4266/original/Select.png"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-md text-gray-600 font-medium">Dharmi</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
          <p className="text-sm text-gray-600 font-normal">
            Mahindra Suzuki Alto
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
