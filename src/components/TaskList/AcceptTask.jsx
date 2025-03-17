import React from 'react'

const AcceptTask = () => {
  return (
    <>
      <div className="h-full shrink-0 w-[300px] bg-lime-500 p-4 rounded-xl sm:w-[250px] sm:p-3">
        <div className="flex justify-between items-start w-full">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">4 March 2025</h4>
        </div>
        <h2 className="mt-3 text-2xl font-semibold">Make A React Js Project</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, voluptatum sed id ratione illum rem?</p>
      </div>
      <div className='flex mt-3 justify-between items-center'>
        <button className='bg-green-500 px-2 py-1 text-sm'>Mark As Completed</button>
        <button className='bg-red-500 px-2 py-1 text-sm'>Mark As Failed</button>
      </div>
    </>
  )
}

export default AcceptTask
