import React from 'react'

const TaskContainer = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 sm:grid-cols-1 sm:gap-4 sm:mt-5">
      {/* Task Container */}
      <div className="rounded-lg py-5 px-8 bg-yellow-500 sm:py-4 sm:px-6">
        {/* Task Count for New Task */}
        <h2 className='text-3xl font-semibold'>{data?.newTaskCount}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className="rounded-lg py-5 px-8 bg-green-500 sm:py-4 sm:px-6">
        {/* Task Count for Complete Task */}
        <h2 className='text-3xl font-semibold'>{data?.completedTaskCount}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className="rounded-lg py-5 px-8 bg-blue-500 sm:py-4 sm:px-6">
        {/* Task Count for Active Task */}
        <h2 className='text-3xl font-semibold'>{data?.activeTaskCount}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>
      <div className="rounded-lg py-5 px-8 bg-red-500 sm:py-4 sm:px-6">
        {/* Task Count for Failed Task */}
        <h2 className='text-3xl font-semibold'>{data?.failedTaskCount}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskContainer
