import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

const Navbar = () => {
  const { authUser, setAuthUser } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch(`/api/logout`, {
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setAuthUser(null);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div style={styles.navbarContainer}>
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <NavLink to="/" style={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li style={styles.navItem}>
            <NavLink to="/profile" style={styles.navLink}>
              Profile
            </NavLink>
          </li>
          <li style={styles.navItem}>
            <NavLink to="/users" style={styles.navLink}>
              Users
            </NavLink>
          </li>
          {authUser ? (
            <>
              <li style={styles.navItem}>
                <NavLink to="/profile" style={styles.navLink}>
                  {authUser.displayName}
                </NavLink>
              </li>
              <li style={styles.navItem}>
                <button style={styles.logoutButton} onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li style={styles.navItem}>
              <NavLink to="/login" style={styles.navLink}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

const styles = {
  navbarContainer: {
    backgroundColor: "#430694",
    textAlign: "center",
    padding: "10px 5px",
  },
  navbar: {
    display: "inline-block",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  navItem: {
    display: "inline",
    margin: "0 20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
  },
  logoutButton: {
    backgroundColor: "#f50f72",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
