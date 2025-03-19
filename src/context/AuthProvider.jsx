import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [refresh, setRefresh] = useState(0)
  useEffect(() => {
    const {employees , admin} = getLocalStorage();
    setUserData({ employees, admin });
  }, [refresh]);

  const refreshData = ()=> setRefresh(prev => prev + 1);
  
  return (
    <>
      <AuthContext.Provider value={{userData , refresh: refreshData }}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;