import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);
  const authData = userData
  return (
    <div className="p-5 bg-[#2c2c2c] mt-5 rounded">
      <div className="bg-[#1e3a8a] py-2 px-4 rounded flex items-center text-center mb-2">
        <h2 className="w-1/5 text-white">Employee Name</h2>
        <h5 className="w-1/5 text-white">New</h5>
        <h5 className="w-1/5 text-white">Active</h5>
        <h5 className="w-1/5 text-white">Completed</h5>
        <h5 className="w-1/5 text-white">Failed</h5>
      </div>
      {authData.employees.map((emp, idx) => {
        return (
          <div
            key={idx}
            className="bg-[#374151] text-white py-2 px-4 rounded flex items-center text-center mb-2"
          >
            <h2 className="w-1/5 text-[#FFD700]">{emp.name}</h2>
            <h5 className="w-1/5 text-[#00FF00]">{emp.newTaskCount}</h5>
            <h5 className="w-1/5 text-[#1E90FF]">{emp.activeTaskCount}</h5>
            <h5 className="w-1/5 text-[#32CD32]">{emp.completedTaskCount}</h5>
            <h5 className="w-1/5 text-[#FF4500]">{emp.failedTaskCount}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
