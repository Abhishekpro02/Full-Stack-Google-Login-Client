import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import User from "./pages/User";
import { useAuthContext } from "./context/AuthContext";
import ProtectedRoute from "./Protectedroute";
import Navbar from "./Navbar";
import Login from "./pages/Login";

const App = () => {
  const { authUser } = useAuthContext();
  // const isAuthenticated = authUser ? true : false;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {authUser ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/profile" element={<Login />} />
        )}
        {authUser ? (
          <Route path="/users" element={<User />} />
        ) : (
          <Route path="/users" element={<Login />} />
        )}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
