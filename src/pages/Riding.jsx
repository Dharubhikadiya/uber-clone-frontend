import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed h-10 w-10 bg-white rounded-full flex items-center justify-center top-2 right-2"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center gap-2 justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1569015390/assets/fa/0e26a9-9d9d-4190-ad6d-a879ccef4266/original/Select.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-md text-gray-600 font-medium">Dharmi</h2>
            <h4 className="text-xl font-semibold ">MP04 AB 1234</h4>
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
          </div>
        </div>
        <button className="mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
