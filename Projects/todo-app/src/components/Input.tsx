import React, {  ChangeEvent } from 'react'

type InputPropsType = {
    Task: string
    Days: number
    HandleChange: (event:ChangeEvent<HTMLInputElement>) => void
    Submit: () => void
}

export const Input = (props: InputPropsType) => {

    return (
        <div className='flex justify-center bg-indigo-500'>
            {/* inputs */}
            <div className='flex flex-col py-10'>
                <input type="text" name="Task" id="" className='border-md border-solid  border-2 border-black rounded-l-md my-1 py-1  px-2' placeholder="Task Here" value={props.Task}
                    onChange={props.HandleChange}/>
                <input type="number" name="Days" id="" className='border-md  border-solid  border-2 border-black rounded-l-md my-1 py-1  px-2' placeholder='Days (in Number)' min={1} onChange={props.HandleChange} value={props.Days} />
            </div>
            {/* button */}
            <div className='flex items-center'>
                <button disabled={ props.Task.length < 7} type="submit" className='bg-black text-white h-20  px-5 rounded-r-md' onClick={props.Submit}>Submit</button>
            </div>
        </div>

    )
}