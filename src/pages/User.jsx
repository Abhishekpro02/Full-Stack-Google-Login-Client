import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/users`, {
          credentials: "include",
        });
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1
        style={{
          color: "#f50f72",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        List of Users
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <div style={styles.tableContainer}>
          <ul style={styles.userList}>
            {users.map((user) => (
              <li key={user._id} style={styles.userItem}>
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  style={styles.avatar}
                />
                <div style={styles.userInfo}>
                  <h3>{user.displayName}</h3>
                  <p>{user.email}</p>
                  <p>Google ID: {user.googleId}</p>
                  <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default User;

const styles = {
  tableContainer: {
    border: "2px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "20px auto",
    width: "80%",
  },
  userList: {
    listStyle: "none",
    padding: 0,
  },
  userItem: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
    marginBottom: "10px",
    paddingBottom: "10px",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "20px",
  },
  userInfo: {
    flex: 1,
  },
};
