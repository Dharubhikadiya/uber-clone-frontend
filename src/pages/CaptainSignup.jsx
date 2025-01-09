import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [userData, setUserData] = useState({});

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const CaptainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      CaptainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data);
      localStorage.setItem("token", data.token);
      navigate("/captain-login");
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="py-5 px-5 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-base font-medium mb-2">
            What's our Captain's Name
          </h3>
          <div className="flex gap-3">
            <input
              required
              className="bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-base placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-base placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <h3 className="text-base font-medium mb-2">
            What's our Captain's email
          </h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-base placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>

          <input
            required
            className="bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-base placeholder:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className="text-base font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-3">
            <input
              required
              className="bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-base placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />

            <input
              required
              className="bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-base placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate Number"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <input
              required
              className="bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-base placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />

            <select
              required
              className="bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-base"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-6 rounded-md px-2 py-2 w-full text-lg my-3 ">
            Create Captain Account
          </button>
          <p className="text-sm text-center">
            Already have a account?{" "}
            <Link to="/captain-login" className="text-blue-700">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] text-gray-500 leading-tight">
          By proceeding, you consent to get calls, including by{" "}
          <u>automated means</u>, from Uber and its{" "}
          <u>affiliates to the number</u> provided
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
