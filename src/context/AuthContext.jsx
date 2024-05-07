import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:7777/profile`, {
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);
        setAuthUser(data.user); // null or authenticated user object
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
