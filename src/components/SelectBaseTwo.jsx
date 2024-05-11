import CreateTable from "react-select/creatable";
//import AsyncSelect from "react-select/async";
//import makeAnaimated from "react-select/animated";
import { useState } from "react";

const options = [
  { value: "chocolate", label: "Chocolate", color: "brown" },
  { value: "strawberry", label: "Strawberry", color: "red" },
  { value: "vanilla", label: "Vanilla", color: "green" },
  { value: "coffee", label: "Coffee", color: "blue" },
];

export const SelectBaseTwo = () => {
  const [opts, setOpts] = useState(options);

  return (
    <div style={{ width: "30%", color: "black" }}>
      <CreateTable
        options={opts}
        onCreateOption={(inputValue) => {
          const newOptions = {
            value: inputValue,
            label: inputValue,
            color: "blue",
          };
          setOpts([...opts, newOptions]);
        }}
      />
    </div>
  );
};
