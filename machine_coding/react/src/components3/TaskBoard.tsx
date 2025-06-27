import { useEffect, useState } from "react";
import "./styles.css";

export default function TaskBoard() {
  /*
  Jira
  1. Create a tasks board with 3 sections, todo, in progress and completed
  2. When clicked on todo task should go to in progress and when clicked on 
    in progress task it should go to completed
  */

  const [tasks, setTasks] = useState([
    { title: "Task 1", taskId: 1, status: "TODO" },
    { title: "Task 2", taskId: 2, status: "IN-PROGRESS" },
    { title: "Task 3", taskId: 3, status: "COMPLETED" },
  ]);

  const updateTask = ({
    taskId,
    status,
  }: {
    taskId: number;
    title?: string;
    status: "TODO" | "IN-PROGRESS" | "COMPLETED";
  }) => {
    switch (status) {
      case "TODO": {
        const taskToUpdate = tasks.find((task) => task.taskId === taskId);
        setTasks((oldTasks) => [
          ...oldTasks.filter((task) => task.taskId !== taskId),
          { ...taskToUpdate, status: "IN-PROGRESS" },
        ]);
        break;
      }
      case "IN-PROGRESS": {
        const taskToUpdate = tasks.find((task) => task.taskId === taskId);
        setTasks((oldTasks) => [
          ...oldTasks.filter((task) => task.taskId !== taskId),
          { ...taskToUpdate, status: "COMPLETED" },
        ]);
        break;
      }
      case "COMPLETED": {
        const taskToUpdate = tasks.find((task) => task.taskId === taskId);
        setTasks((oldTasks) => [
          ...oldTasks.filter((task) => task.taskId !== taskId),
          { ...taskToUpdate, status: "TODO" },
        ]);
        break;
      }
    }
  };

  console.log(tasks);

  const TabelRenderer = () => {
    return (
      <table>
        <tbody>
          <th
            style={{
              border: "1px solid black",
            }}
          >
            <tr>
              <td>Todo</td>
            </tr>
          </th>

          <th
            style={{
              border: "1px solid black",
            }}
          >
            <tr>
              <td>In Progress</td>
            </tr>
          </th>

          <th
            style={{
              border: "1px solid black",
            }}
          >
            <tr>
              <td>Completed</td>
            </tr>
          </th>
        </tbody>
        <tbody
          style={{
            border: "1px solid red",
          }}
        >
          <tr>
            <td>
              {tasks
                .filter((task) => task.status === "TODO")
                .map((task) => {
                  return (
                    <tr onClick={() => updateTask(task)}>
                      <td>{task.title}</td>
                    </tr>
                  );
                })}
            </td>
            <td>
              {tasks
                .filter((task) => task.status === "IN-PROGRESS")
                .map((task) => {
                  return (
                    <tr onClick={() => updateTask(task)}>
                      <td>{task.title}</td>
                    </tr>
                  );
                })}
            </td>
            <td>
              {tasks
                .filter((task) => task.status === "COMPLETED")
                .map((task) => {
                  return (
                    <tr onClick={() => updateTask(task)}>
                      <td>{task.title}</td>
                    </tr>
                  );
                })}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="App">
      <h2>Jira Lite</h2>
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <div>
          <h3>Todo</h3>
          <tbody
            style={{
              border: "1px solid red",
            }}
          >
            {tasks
              .filter((task) => task.status === "TODO")
              .map((task) => {
                return (
                  <tr onClick={() => updateTask(task)}>
                    <td>{task.title}</td>
                  </tr>
                );
              })}
          </tbody>
        </div>
        <div>
          <h3>In Progress</h3>
          <div>
            {tasks
              .filter((task) => task.status === "IN-PROGRESS")
              .map((task) => {
                return <div onClick={() => updateTask(task)}>{task.title}</div>;
              })}
          </div>
        </div>
        <div>
          <h3>Completed</h3>
          <div>
            {tasks
              .filter((task) => task.status === "COMPLETED")
              .map((task) => {
                return <div onClick={() => updateTask(task)}>{task.title}</div>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
