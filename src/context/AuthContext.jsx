import { createContext, useContext, useEffect, useRef, useState } from "react";
import { BASE_URL } from "../constants";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (!isInitialRender.current) {
      const checkUserLoggedIn = async () => {
        setLoading(true);
        try {
          const res = await fetch(`${BASE_URL}/api/profile`, {
            credentials: "include",
          });
          console.log(res);

          const data = await res.json();
          console.log(data);
          setAuthUser(data.user); // null or authenticated user object

          // check if status code is 401
          if (res.status === 401) {
            alert("Please enable cookies to use this app.");
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      checkUserLoggedIn();
    } else {
      isInitialRender.current = false;
    }
  }, [setAuthUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
