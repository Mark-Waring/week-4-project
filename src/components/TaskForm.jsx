import React, { useState } from "react";
import { FieldSet } from "../shared/components/groups/FieldSet";
import RadioGroup from "../shared/components/groups/RadioGroup";
export const TaskForm = ({ addTask }) => {
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);
    const [id, setId] = useState(1);
    const values = [
        { value: true, displayText: "Completed" },
        { value: false, displayText: "Incomplete" },
    ];
    return (React.createElement("div", null,
        React.createElement(FieldSet, { id: "username", type: "text", value: username, onChange: (e) => setUsername(e.target.value), displayText: "Username", placeholder: "John Doe" }),
        React.createElement(FieldSet, { id: "title", type: "text", value: title, onChange: (e) => setTitle(e.target.value), displayText: "Title", placeholder: "Make a Task List" }),
        React.createElement(RadioGroup, { name: "completed", values: values, state: completed, onChange: (e) => setCompleted(e.target.value === "true" ? true : false) }),
        React.createElement("button", { 
            //! If either one is an empty string, we take advantage of empty strings
            //! Being falsy. so not falsy is just the boolean true
            disabled: !username || !title, onClick: () => {
                let taskToAdd = {
                    id,
                    username,
                    title,
                    completed,
                };
                setId((curr) => curr + 1);
                addTask(taskToAdd);
                setUsername("");
                setTitle("");
            } }, "Add Task")));
};