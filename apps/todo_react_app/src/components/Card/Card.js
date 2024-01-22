import React from "react";
import styles from "./Card.module.css";
import { Button } from "../Button";

const Card = ({ text, id, setList }) => {
  const handleClick = React.useCallback(() => {
    setList((prevState) => prevState.filter((props) => props.id !== id));
  }, [setList, id]);

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
