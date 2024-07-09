import React from "react";
import styles from "./page-layout.module.css";

const PageLayout = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <h1 className={styles.heading}>Todo React App</h1>
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
