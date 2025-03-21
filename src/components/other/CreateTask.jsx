import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {
  const { userData } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDate: "",
    assignTo: "",
    category: "",
    taskDescription: "",
  });
  const [newtask, setnewTask] = useState({})
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const taskData = {
      id : Date.now(),
      title : formData.taskTitle,
      description : formData.taskDescription,
      date : formData.taskDate,
      category : formData.category,
      active : true,
      newTask : true,
      complete : false,
      failed : false
    }
    setnewTask(taskData);
    const data = userData.employees;
    let updated = false;
    data.forEach((elem)=>{
      if(formData.assignTo === elem.name){
        console.log('task is assigned to :' , elem.name)
        elem.tasks.push(taskData);
        elem.newTaskCount +=1;
        updated = true;
        console.log(elem)
      }
    })
    if (updated) {
      localStorage.setItem('employees', JSON.stringify(data));
    }
    console.log(data);
    setFormData({
      taskTitle: "",
      taskDate: "",
      assignTo: "",
      category: "",
      taskDescription: "",
    });
  };
  return (
    <>
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row w-full items-start justify-between gap-5"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="taskTitle"
                className="text-sm text-gray-300 mb-0.5"
              >
                Task Title
              </label>
              <input
                type="text"
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
                id="taskTitle"
                placeholder="Task Title"
                value={formData.taskTitle}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="taskDate"
                className="text-sm text-gray-300 mb-0.5"
              >
                Date
              </label>
              <input
                type="date"
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
                id="taskDate"
                value={formData.taskDate}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="assignTo"
                className="text-sm text-gray-300 mb-0.5"
              >
                Assign To
              </label>
              <input
                type="text"
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
                placeholder="Assign To"
                id="assignTo"
                value={formData.assignTo}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="category"
                className="text-sm text-gray-300 mb-0.5"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
                placeholder="Category of the task"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="taskDescription"
                className="text-sm text-gray-300 mb-0.5"
              >
                Task Description
              </label>
              <textarea
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
                id="taskDescription"
                placeholder="Task description"
                value={formData.taskDescription}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
