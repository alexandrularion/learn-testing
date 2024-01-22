import React from "react";
import styles from "./Card.module.css";
import { Button } from "../Button";

const Card = ({ text, id, list, setList }) => {
  const handleClick = React.useCallback(() => {
    // remove the current item clicked by filtering the list
    const newList = list.filter(({ id: currentId }) => currentId !== id);
    // update the list with the new list
    setList(newList);
  }, [setList, list, id]);
  return (
    <section className={styles.section}>
      <p className={styles.paragraph}>{text}</p>
      <span className={styles.buttons}>
        <Button>Edit</Button>
        <Button onClick={handleClick}>Remove</Button>
      </span>
    </section>
  );
};

export default Card;
