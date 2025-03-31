import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData, refresh } = useContext(AuthContext);

  // Initialize localStorage only once when the app first loads
  useEffect(() => {
    // Check if localStorage has been initialized before
    const isInitialized = localStorage.getItem("isStorageInitialized");
    
    if (!isInitialized) {
      // First time loading the app - initialize localStorage
      setLocalStorage();
      // Mark as initialized so we don't reset data on future loads
      localStorage.setItem("isStorageInitialized", "true");
      console.log("localStorage initialized for the first time");
    } else {
      console.log("localStorage already initialized, using existing data");
    }
    
    // Refresh context to load current data

  }, []);  // Empty dependency array means this runs once on mount

  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role);
        if (parsedUser.role === "employee") {
          setLoggedInUserData(parsedUser.data);
        }
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email === "admin1@gmail.com" && password === "7890") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin");
    } else if (userData) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      console.log("Invalid Login");
    }
    refresh();
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
