import React from "react";

const AcceptTask = ({ task }) => {
  return (
    <>
      <div className="h-[200px] shrink-0 w-[300px] bg-lime-500 p-4 rounded-xl flex flex-col justify-between sm:w-[250px] sm:p-3 md:w-[220px] md:p-2">
        <div className="flex justify-between items-center w-full">
          <h3 className="bg-red-600 px-3 py-1 rounded text-white text-sm md:text-xs truncate">
            {task.category}
          </h3>
          <h4 className="text-sm md:text-xs truncate">{task.date}</h4>
        </div>
        <h2 className="mt-3 text-2xl font-bold md:text-lg truncate text-center">
          {task?.title}
        </h2>
        <p className="text-sm mt-1 md:text-xs line-clamp-2">
          {task?.description}
        </p>
        <div className="flex mt-3 justify-between items-center">
          <button className="bg-green-500 px-2 py-1 text-xs rounded-lg cursor-pointer text-white md:px-1 md:py-0.5">
            Mark As Completed
          </button>
          <button className="bg-red-500 px-2 py-1 rounded-lg cursor-pointer text-xs text-white md:px-1 md:py-0.5">
            Mark As Failed
          </button>
        </div>
      </div>
    </>
  );
};

export default AcceptTask;
