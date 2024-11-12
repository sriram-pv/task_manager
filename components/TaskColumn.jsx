import React from "react";
import TaskCard from "../components/TaskCard";
import "./TaskColumn.css";
const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img className="task_column_icon" src={icon} alt=""></img>
          {title}
        </h2>
      </section>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </div>
  );
};

export default TaskColumn;
