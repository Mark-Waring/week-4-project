import React, { useState } from "react";
import { FieldSet } from "../shared/components/groups/FieldSet";
import TasksTable from "./TasksTable";
const FilterTasks = ({ tasks, deleteTask, toggleCompletion, }) => {
    const [filterText, setFilterText] = useState("");
    let filteredTasks = tasks.filter((t) => {
        const user = t.username.toLowerCase();
        const title = t.title.toLowerCase();
        const filter = filterText.toLowerCase();
        return user.includes(filter) || title.includes(filter);
    });
    return (React.createElement("div", null,
        React.createElement(FieldSet, { id: "filter", type: "text", value: filterText, onChange: (e) => setFilterText(e.target.value), displayText: "Filter" }),
        React.createElement(TasksTable, { toggleCompletion: toggleCompletion, deleteTask: deleteTask, filteredTasks: filteredTasks })));
};
export default FilterTasks;
