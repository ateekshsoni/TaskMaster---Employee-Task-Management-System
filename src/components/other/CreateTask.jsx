import React from "react";

const CreateTask = () => {
  return (
    <>
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form
          action=""
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
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Category"
                className="text-sm text-gray-300 mb-0.5"
              >
                Category
              </label>
              <input
                type="text"
                id="Category"
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
                placeholder="Category of the task"
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
              />
            </div>
            <button className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
