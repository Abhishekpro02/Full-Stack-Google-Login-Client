import React from "react";
import { useAuthContext } from "../context/AuthContext";

const Profile = () => {
  const { authUser } = useAuthContext();

  if (!authUser) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        gap: "20px",
      }}
    >
      <h1
        style={{
          color: "purple",
        }}
      >
        My Profile Details 🐰🐰
      </h1>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={authUser?.avatar}
          alt="User Avatar"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <h2>{authUser?.displayName}</h2>
        <p>{authUser?.email}</p>
        <p>Google ID : {authUser?.googleId}</p>
        <p>Joined: {new Date(authUser?.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Profile;
