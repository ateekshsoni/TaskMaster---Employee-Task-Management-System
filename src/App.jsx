import React, { useContext, useEffect, useState } from "react";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import LoginPage from "./components/Auth/LoginPage";
import MaintenancePage from "./components/Maintenance/MaintenancePage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData, refresh } = useContext(AuthContext);
  
  // Set to true to show maintenance page, false to show normal app
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(true);

  // Add keyboard shortcut to toggle maintenance mode (Ctrl+Shift+M)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'M') {
        setIsMaintenanceMode(prev => !prev);
        console.log('Maintenance mode toggled:', !isMaintenanceMode);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMaintenanceMode]);

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
      {isMaintenanceMode ? (
        <MaintenancePage />
      ) : (
        <>
          {!user ? <LoginPage handleLogin={handleLogin} /> : ""}
          {user === "admin" ? (
            <AdminDashboard changeUser={setUser} />
          ) : user === "employee" ? (
            <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default App;
