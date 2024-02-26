"use client";
import { createContext, useEffect, useState } from "react";
import { wai } from "actions/authAction";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const data = await wai();
      
      if (data?.error) {
        setUser(null);
      } else {
        setUser(data.user);
      }
    };
    checkUserLoggedIn();
  }, []);

  const loginContext = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, loginContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
