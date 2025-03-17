import React from 'react'
import Header from '../other/Header'
import TaskContainer from '../other/TaskContainer'
import TaskListManager from '../TaskList/TaskListManager'

const EmployeeDashboard = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="p-10 bg-[#1c1c1c] h-screen w-full sm:p-6 sm:h-auto">
        <Header data={data} />
        <TaskContainer data={data} />
        <TaskListManager data={data} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
