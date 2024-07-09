import React from "react";
import styles from "./button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <button data-testid="button" className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
