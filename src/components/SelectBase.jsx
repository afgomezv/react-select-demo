//import Select from "react-select";
import AsyncSelect from "react-select/async";
import makeAnaimated from "react-select/animated";

const options = [
  { value: "chocolate", label: "Chocolate", color: "brown" },
  { value: "strawberry", label: "Strawberry", color: "red" },
  { value: "vanilla", label: "Vanilla", color: "green" },
  { value: "coffee", label: "Coffee", color: "blue" },
];

const animatedComponents = makeAnaimated();

const SelectBase = () => {
  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = options.filter((option) =>
        option.label
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
      callback(filteredOptions);
    }, 2000);
  };

  const styles = {
    control: (styles) => {
      //console.log(styles);
      return {
        ...styles,
        backgroundColor: "#eee0cb",
      };
    },
    placeholder: (styles) => {
      return {
        ...styles,
        color: "green",
      };
    },
    // {data, isDisabled, isFocused, isSelected}
    option: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "#EEE0CB",
        color: data.color,
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "white",
      };
    },
    multiValueLabel: (styles) => {
      return {
        ...styles,
        color: "white",
      };
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        backgroundColor: "orange",
        color: "red",
      };
    },
  };

  return (
    <div style={{ width: "30%" }}>
      <AsyncSelect
        isMulti
        closeMenuOnSelect={false}
        //options={options} -> Select
        loadOptions={loadOptions}
        components={animatedComponents}
        defaultOptions
        //defaultValue={[options[2], options[3]]} -> Select
        onChange={(selectedOption) => {
          console.log(selectedOption);
        }}
        styles={styles}
      />
    </div>
  );
};

export default SelectBase;
