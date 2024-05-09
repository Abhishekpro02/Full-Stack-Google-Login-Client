import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Precogs AI</h1>
      <h2
        style={{
          color: "#430694",
        }}
      >
        Google OAuth with React
      </h2>
      <p style={styles.paragraph}>
        This is a simple application to demonstrate Google OAuth with React
        ,passport.js and Node.js.
      </p>

      <p style={styles.paragraph}>
        <Link to="/login" style={styles.link}>
          Go to Login Page
        </Link>
        .
      </p>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#f50f72",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    marginTop: "10px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
