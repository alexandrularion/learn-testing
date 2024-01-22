import React from "react";
import styles from "./List.module.css";
import { Card } from "../Card";

const List = ({ list, setList }) => {
  return (
    <section className={styles.section}>
      {list.map(({ text, id }, index) => (
        <Card key={index} text={text} id={id} list={list} setList={setList} />
      ))}
    </section>
  );
};

export default List;
