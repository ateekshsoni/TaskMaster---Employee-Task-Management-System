import React from 'react';

const FailedTask = ({ task }) => {
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
          {task.title}
        </h2>
        <p className="text-sm mt-1 md:text-xs line-clamp-2">
          {task.description}
        </p>
        <div className="mt-2">
          <button className="w-full bg-red-600 text-white py-1 rounded-lg text-sm md:text-xs md:py-0.5">
            Failed
          </button>
        </div>
      </div>
    </>
  );
};

export default FailedTask;
