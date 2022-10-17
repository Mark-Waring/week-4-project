import React from "react";
import { InputContainer } from "../elements/Container";
import { FieldSet } from "./FieldSet";
const RadioGroup = ({ name, onChange, state, values }) => {
    return (React.createElement(InputContainer, { justify: "center" }, values.map((val, idx) => (React.createElement(FieldSet, { key: `${name}-${idx}`, type: "radio", value: val.value, displayText: val.displayText, id: `${name}-${idx}`, onChange: onChange, name: name, checked: state === val.value })))));
};
export default RadioGroup;
// onChange={e=> setSomething(e.target.value)}
// checked={state === value}