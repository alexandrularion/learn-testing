import React from "react";
import style from "./Add.module.css";

const Add = ({ setList, list }) => {
  const [value, setValue] = React.useState("");

  const handleClick = React.useCallback(() => {
    // generate random number as id
    const id = Math.random().toString(16).slice(2);

    // concatenate the current list, and adding the new item
    setList([...list, { text: value, id: id }]);

    // reset the value of the input to ""
    setValue("");
  }, [setList, list, value]);

  const handleChange = React.useCallback((e) => {
    // set the value received from the event of the input
    setValue(e.target.value);
  }, []);

  return (
    <section className={style.section} data-testid="section">
      <input
        value={value}
        className={style.input}
        placeholder="Enter the activity"
        onChange={handleChange}
        data-testid="input"
      />
      <button
        className={style.button}
        onClick={handleClick}
        data-testid="button"
        disabled={Boolean(!value)}
      >
        Save
      </button>
    </section>
  );
};

export default Add;
