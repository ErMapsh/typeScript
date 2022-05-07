import React from 'react'
import { ITask } from '../interfaces/Tasktype'

interface TodoTaskPropsType {
    Taskobject: ITask
    completeTask: (TaskNameToDelete: string) => void
}

export const TodoTask = ({ Taskobject, completeTask }: TodoTaskPropsType) => {

    return (
        <div className='flex justify-center items-center mt-4 p-2' >
                <span className='text-white bg-indigo-500 font-medium  py-3 w-60 '>{Taskobject.TaskName}</span>
                <span className='text-white bg-indigo-500 font-medium mx-0.5 px-20 py-3 w-48 '>{Taskobject.deadline}</span>
                <button className='px-8 py-3 bg-teal-400 text-black py-3 rounded-r-md' onClick={()=>{completeTask(Taskobject.TaskName)}}>X</button>
        </div>
    )
}
