var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Input, Label, InputContainer, } from "../elements";
export const FieldSet = (_a) => {
    var { displayText } = _a, inputProps = __rest(_a, ["displayText"]);
    //! If it is a checkbox or radio show input then label
    if (inputProps.type === "radio" || inputProps.type === "checkbox") {
        return (React.createElement(InputContainer, { justify: "center" },
            React.createElement(Input, Object.assign({}, inputProps)),
            React.createElement(Label, { id: inputProps.id, displayText: displayText })));
    }
    return (React.createElement(InputContainer, { column: true },
        React.createElement(Label, { id: inputProps.id, displayText: displayText }),
        React.createElement(Input, Object.assign({ rounded: true }, inputProps))));
};