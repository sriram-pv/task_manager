import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "../components/TaskForm";
import TaskColumn from "../components/TaskColumn";
import Todoicon from "../src/assets/direct-hit.png";
import Doing from "../src/assets/glowing-star.png";
import Done from "../src/assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks)||[]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  console.log("tasks", tasks);

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          task="To Do"
          icon={Todoicon}
          tasks={tasks}
          status="todo"
          title="To Do"
          handleDelete={handleDelete}
        />
        <TaskColumn
          task="Doing"
          icon={Doing}
          tasks={tasks}
          status="doing"
          title="Doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          task="Done"
          icon={Done}
          tasks={tasks}
          status="done"
          title="Done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
