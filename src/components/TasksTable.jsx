import React, { useState } from "react";
import RadioGroup from "../shared/components/groups/RadioGroup";
import TaskDisplay from "./TaskDisplay";
var Order;
(function (Order) {
    Order[Order["ASC"] = 1] = "ASC";
    Order[Order["DESC"] = -1] = "DESC";
})(Order || (Order = {}));
const TasksTable = ({ filteredTasks, deleteTask, toggleCompletion, }) => {
    const [sortKey, setSortKey] = useState("id");
    const [sortOrder, setSortOrder] = useState(Order.ASC);
    function assignSort(key) {
        if (sortKey === key) {
            setSortOrder((curr) => (curr === Order.ASC ? Order.DESC : Order.ASC));
            return;
        }
        setSortKey(key);
        setSortOrder(1);
    }
    function sortFunction(a, b) {
        let valueA = a[sortKey];
        let valueB = b[sortKey];
        if (typeof valueA === "string" && typeof valueB === "string") {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
        }
        if (valueA > valueB) {
            return 1 * sortOrder;
        }
        else if (valueB > valueA) {
            return -1 * sortOrder;
        }
        return 0;
    }
    let values = [
        { value: "id", displayText: "ID" },
        { value: "username", displayText: "Username" },
        { value: "title", displayText: "Title" },
        { value: "completed", displayText: "Completed" },
    ];
    return (React.createElement("div", null,
        React.createElement(RadioGroup, { values: values, name: "choices", state: sortKey, onChange: (e) => setSortKey(e.target.value) }),
        React.createElement("table", { role: "table" },
            React.createElement("thead", null,
                React.createElement("tr", { role: "row" },
                    React.createElement("th", { role: "columnheader", onClick: () => assignSort("id") }, "ID"),
                    React.createElement("th", { role: "columnheader", onClick: () => assignSort("username") }, "Username"),
                    React.createElement("th", { role: "columnheader", onClick: () => assignSort("title") }, "Title"),
                    React.createElement("th", { role: "columnheader", onClick: () => assignSort("completed") }, "Completed"))),
            React.createElement("tbody", null,
                filteredTasks.length === 0 && (React.createElement("tr", null,
                    React.createElement("td", { colSpan: 4 }, "No Tasks Currently"))),
                filteredTasks.length > 0 &&
                    filteredTasks
                        .sort(sortFunction)
                        .map((task) => (React.createElement(TaskDisplay, Object.assign({ key: task.id, toggleCompletion: toggleCompletion, deleteTask: deleteTask }, task))))))));
};
export default TasksTable;