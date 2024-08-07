import React from "react";
import styles from "./list.module.css";
import Card from "../card";

const List = ({ list, setList }) => {
  return (
    <section className={styles.section}>
      {list.map(({ label, id }, index) => (
        <Card
          key={index}
          index={index + 1}
          label={label}
          id={id}
          list={list}
          setList={setList}
        />
      ))}
    </section>
  );
};

export default List;
