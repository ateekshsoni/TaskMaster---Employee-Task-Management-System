import React, { useContext, useEffect, useState } from 'react'
import Header from '../other/Header'
import TaskContainer from '../other/TaskContainer'
import TaskListManager from '../TaskList/TaskListManager'
import { AuthContext } from '../../context/AuthProvider';


const EmployeeDashboard = (props) => {
  const {userData} = useContext(AuthContext);
  const [employeeData, setEmployeeData] = useState(props.data)
  useEffect(()=>{
    const updatedData = userData.employees.find((e)=>e.id === employeeData.id);
    if(updatedData){
      setEmployeeData(updatedData);
    }
  },[userData , props.data])
  return (
    <>
      <div className="p-10 bg-[#1c1c1c] h-screen w-full sm:p-6 sm:h-auto">
        <Header data={employeeData} changeUser={props.changeUser} />
        <TaskContainer data={employeeData} />
        <TaskListManager data={employeeData} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
