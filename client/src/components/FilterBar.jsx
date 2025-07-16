import React from 'react'

const FilterBar = ({ onStatusChange }) => {
  return (
       <select
      onChange={(e) => onStatusChange(e.target.value)}
      className="border h-[40px] p-2 rounded"
    >
      <option value="">All</option>
      <option value="pending">Pending</option>
      <option value="completed">Completed</option>
    </select>
  )
}

export default FilterBar
