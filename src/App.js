import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTask = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList === 0 ? 1 : todoList.length + 1,
      taskName: newTask,
      completeTask: false,
    };
    setTodoList([...todoList, task]);
  };

  const removeTask = (id) => {
    setTodoList(todoList.filter((todo) => (todo.id === id ? false : true)));
  }

    const completedTasks = (id) => {
      setTodoList(
        todoList.map((todo) =>
          todo.id === id ? { ...todo, completeTask: true } : todo 
        )
      );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleTask} />
        <button onClick={addTask}>Add Tasks</button>
      </div>
      <div className="list">
        {todoList.map((task) => (
          <div className="task" style={{backgroundColor:task.completeTask===true?"green":"white"}}>
            <h1>{task.id + "."  + task.taskName}</h1>
            <button onClick={() => removeTask(task.id)}>x</button>
            <button onClick={() => completedTasks(task.id)}>complete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
