import React, { useState } from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm";
import FilterTasks from "./components/FilterTasks";
function App() {
    const [tasks, setTasks] = useState([]);
    const addTask = (newTask) => {
        setTasks((curr) => [...curr, newTask]);
    };
    const deleteTask = (id) => {
        setTasks((curr) => curr.filter((val) => val.id !== id));
    };
    const toggleCompletion = (id) => {
        setTasks((curr) => curr.map((val) => {
            if (val.id !== id) {
                return val;
            }
            return Object.assign(Object.assign({}, val), { completed: !val.completed });
        }));
    };
    return (React.createElement("div", null,
        React.createElement(TaskForm, { addTask: addTask }),
        React.createElement(FilterTasks, { toggleCompletion: toggleCompletion, deleteTask: deleteTask, tasks: tasks })));
}
export default App;