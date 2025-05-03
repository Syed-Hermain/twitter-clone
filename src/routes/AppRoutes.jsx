import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Auth from "../pages/Auth";
import EditProfile from "../pages/EditProfile";
import Explore from "../pages/Explore";
import Navbar from "../pages/Navbar";
import Notification from "../pages/Notification";
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile/edit" element={<EditProfile/>}/>
          <Route path="/auth" element={<Auth />} />
          <Route path="/notifications" element={<Notification/>}/>
          </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;