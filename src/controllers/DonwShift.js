import React from "react";
import Downshift from "downshift";

const items = ["apple", "pear", "orange", "grape", "banana"];

export default ({ value, onChange }) => (
  <Downshift
    initialInputValue={value}
    onChange={onChange}
    itemToString={item => (item ? item : "")}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem
    }) => (
      <div>
        <label {...getLabelProps()} className="label">
          Downshift
        </label>
        <input
          {...getInputProps()}
          className="input"
          placeholder="Enter a fruit"
        />
        <ul {...getMenuProps()}>
          {isOpen
            ? items
              .filter(item => !inputValue || item.includes(inputValue))
              .map((item, index) => (
                <li
                  {...getItemProps({
                    key: item,
                    index,
                    item,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? "lightgray" : null,
                      fontWeight: selectedItem === item ? "bold" : "normal"
                    }
                  })}
                >
                  {item}
                </li>
              ))
            : null}
        </ul>
      </div>
    )}
  </Downshift>
);
