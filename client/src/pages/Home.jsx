import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import TaskForm from '../components/TaskForm';
import TaskCreationModal from '../components/TaskCreationModal';
import FilterBar from '../components/FilterBar';
import TaskList from '../components/TaskList';

const Home = () => {
    const [showModal,setShowModal] = useState(false);

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className="text-2xl font-bold mb-6 text-center">Task Manager</h1>
      <div className='flex justify-center gap-2  '>
         <FilterBar />
      <button onClick={() => setShowModal(true)}         
      className="bg-green-600 flex text-white gap-1 cursor-pointer px-4 py-2 rounded mb-4" >
        <Plus /> Add Task
      </button>
      </div>
     <TaskList />
    {showModal && (
        <TaskCreationModal onClose={() => setShowModal(false)}>
            <TaskForm  />
        </TaskCreationModal>
    )}
    </div>
  )
}

export default Home