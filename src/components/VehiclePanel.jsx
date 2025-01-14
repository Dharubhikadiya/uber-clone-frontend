import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setVehiclepanel(false)}
        className="p-1 absolute w-[93%] text-center top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

      <div
        onClick={() => props.setConfirmRidePanel(true)}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1569015390/assets/fa/0e26a9-9d9d-4190-ad6d-a879ccef4266/original/Select.png"
          alt=""
        />
        <div
          className="ml-2
        w-1/2"
        >
          <h4 className="font-medium text-base">
            UberGo
            <span>
              <i class="ri-user-fill ps-1"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>

      <div
        onClick={() => props.setConfirmRidePanel(true)}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3"
      >
        <img
          className="h-11"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div
          className="ml-2
        w-1/2"
        >
          <h4 className="font-medium text-base">
            Moto
            <span>
              <i className="ri-user-fill ps-1"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Motor cycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65.17</h2>
      </div>

      <div
        onClick={() => props.setConfirmRidePanel(true)}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3"
      >
        <img
          className="h-11"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div
          className="ml-2
        w-1/2"
        >
          <h4 className="font-medium text-base">
            UberAuto
            <span>
              <i className="ri-user-fill ps-1"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹118.21</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
