import React from "react";
export const Label = ({ id, displayText }) => {
    return React.createElement("label", { htmlFor: id }, displayText);
};
