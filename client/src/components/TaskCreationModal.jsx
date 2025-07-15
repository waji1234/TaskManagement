import React from 'react'

const TaskCreationModal = ({children, onClose}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md relative">
        <button onClick={onClose} className="absolute cursor-pointer top-2 right-3 text-gray-500">✕</button>
        {children}
      </div>
    </div>
  )
}

export default TaskCreationModal;