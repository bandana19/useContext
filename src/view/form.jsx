import React from 'react'

const Form = ({setTask,setDeadline,setStatus,task,status,deadline}) => {

  return (
    <>
      <p>Task</p>
                <input className='text-box' value={task} type="text" placeholder='Enter task'
                    onChange={(e) => setTask(e.target.value)} />
                <p>Status</p>
                <input className='text-box' value={status} type="text" placeholder='Enter status'
                    onChange={(e) => setStatus(e.target.value)} />
                <p>Deadline</p>
                <input className='text-box' value={deadline} type="date" placeholder='Enter deadline'
                    onChange={(e) => setDeadline(e.target.value)} />
    </>
  )
}

export default Form