import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const {userData , refresh} = useContext(AuthContext);
  const authData = userData;


  useEffect(() => {
    // Initialize local storage with employee and admin data
    setLocalStorage();

    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role);
        if (parsedUser.role === "employee") {
          setLoggedInUserData(parsedUser.data); // Retrieve employee data from localStorage
        }
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin1@gmail.com" && password == "7890") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin"); // Set user as 'admin'
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee"); // Set user as 'employee'
        setLoggedInUserData(employee); // Store employee data
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
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> // Pass employee data
      ) : (
        ""
      )}
    </>
  );
};

export default App;
