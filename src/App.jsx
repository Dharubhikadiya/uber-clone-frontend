import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import Home from "./pages/Home";
import UserContext from "./context/Usercontext";
import UserProtectedwrapper from "./pages/UserProtectedwrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedwrapper from "./pages/CaptainProtectedwrapper";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route
          path="/home"
          element={
            <UserProtectedwrapper>
              <Home />
            </UserProtectedwrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedwrapper>
              <UserLogout />
            </UserProtectedwrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedwrapper>
              <CaptainHome />
            </CaptainProtectedwrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
