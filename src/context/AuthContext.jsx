import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const checkUserLoggedIn = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch(`${BASE_URL}/api/profile`, {
  //         credentials: "include",
  //       });
  //       console.log(res);

  //       const data = await res.json();
  //       console.log(data);
  //       setAuthUser(data.user); // null or authenticated user object
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   checkUserLoggedIn();
  // }, [setAuthUser]);
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/api/profile`, {
          credentials: "include",
        });
        console.log(res);

        if (res.status === 200) {
          const data = await res.json();
          console.log(data);
          setAuthUser(data.user); // null or authenticated user object
        } else {
          // Handle non-200 status codes, e.g., logout the user
          setAuthUser(null);
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    checkUserLoggedIn();
  }, [setAuthUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
