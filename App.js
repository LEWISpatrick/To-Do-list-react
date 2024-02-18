import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')
  
  function handleChange(event) {
    setNewTask(event.target.value)
  }
  
  function addTask() {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
      taskCompleted: false
    }
    setTodoList([...todoList, task])
  }

  function deleteTask(id) {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  function completeTask(id) {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          console.log('bajnan')
          return {...task, taskCompleted: !addTask.taskCompleted};
        } else {
          return task;
        }
      })
    )
  }

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <div key={task.id}>
              <h1 style={{ color: task.taskCompleted   ? 'green' : 'inherit' }}>
                {task.taskName}
              </h1> 
              <button onClick={() => deleteTask(task.id)}> X </button> 
              <button onClick={() => completeTask(task.id)}>Completed</button>
            </div>
          )  
        })}
      </div>
    </div>
  );
}

export default App;
