import React from 'react'

const FilterBar = () => {
  return (
     <div className="flex gap-3 mb-4 justify-center">
      {["All", "Pending", "Completed"].map((status) => (
        <button
          key={status}
          className=" cursor-pointer bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
        >
          {status}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
