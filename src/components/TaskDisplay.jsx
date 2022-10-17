import React from "react";
const TaskDisplay = ({ username, title, id, completed, deleteTask, toggleCompletion, }) => {
    return (React.createElement("tr", { style: { textDecoration: completed ? "line-through" : "none" } },
        React.createElement("td", null, id),
        React.createElement("td", null, username),
        React.createElement("td", null, title),
        React.createElement("td", { onClick: () => toggleCompletion(id) }, completed.toString()),
        React.createElement("td", null,
            React.createElement("button", { onClick: () => deleteTask(id) }, "Delete"))));
};
export default TaskDisplay;