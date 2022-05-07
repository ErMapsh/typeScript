import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { Input } from './components/Input';
import { TodoTask } from './components/TodoTask';
import { ITask } from './interfaces/Tasktype'

function App() {
  const [ToDoList, setToDoList] = useState<ITask[]>([])
  const [Task, setTask] = useState<string>("")
  const [Days, setDays] = useState<number>(0)

  const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "Task") {
      setTask(event.target.value)
    } else if (event.target.name === "Days") {
      setDays(Number(event.target.value))
    }
  }

  const Submit = () => {
    let NewTask = { TaskName: Task, deadline: Days }
    setToDoList([...ToDoList, NewTask])
    setTask("")
    setDays(0)
  }

  const completeTask = (TaskNameToDelete: string) => {
    setToDoList(ToDoList.filter((task) => {
      return task.TaskName != TaskNameToDelete
    }))
  }

  return (
    <div className="App">
      <Input Task={Task} Days={Days} HandleChange={HandleChange} Submit={Submit} />
      <div>
        {
          ToDoList.map((Taskobject: ITask, index: number) => {
            return <TodoTask key={index} Taskobject={Taskobject} completeTask={completeTask} />
          })
        }
      </div>
    </div>
  );
}

export default App;
