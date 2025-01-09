import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [FinishRidePanel, setFinishRidePanel] = useState(false);
  const FinishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (FinishRidePanel) {
        gsap.to(FinishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(FinishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [FinishRidePanel]
  );

  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 left-0 w-full flex items-center justify-between">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white rounded-full flex items-center justify-center"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div
        className="h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative pt-10"
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5
          onClick={() => {}}
          className="p-1 absolute w-[90%] text-center top-0"
        >
          <i className="text-3xl text-gray-800 ri-arrow-up-wide-fill"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complate Ride
        </button>
      </div>
      <div
        ref={FinishRidePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
