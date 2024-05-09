import React from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // window.location.href = "https://backend-test-ruddy.vercel.app/auth/github"
    window.open(`${BASE_URL}/api/auth/google`, "_self");
    // window.location.href = "/dashboard"
  };
  return (
    <div className="container">
      <h1
        style={{
          color: "#f50f72",
        }}
      >
        Google Login Test
      </h1>
      <GoogleButton onClick={handleLogin} />
    </div>
  );
};

export default Login;
