import React from "react";
import style from "./Add.module.css";

const Add = ({ setList }) => {
  const [value, setValue] = React.useState("");

  const handleClick = React.useCallback(() => {
    setList((prevState) => [
      ...prevState,
      { text: value, id: Math.random().toString(16).slice(2) },
    ]);
    setValue("");
  }, [setList, value]);

  return (
    <section className={style.section} data-testid="section">
      <input
        value={value}
        className={style.input}
        placeholder="Enter the to-do"
        onChange={(e) => setValue(e.target.value)}
        data-testid="input"
      />
      <button
        className={style.button}
        onClick={handleClick}
        data-testid="button"
      >
        Save
      </button>
    </section>
  );
};

export default Add;
