import { Add } from "./components/Add";
import "./App.css";
import React from "react";
import { List } from "./components/List";
import { Layout } from "./components/Layout";

function App() {
  /**
   * List of objects
   * Each object have the following form: { label: 'Hello World', id: 123123123 }
   */
  const [list, setList] = React.useState([]);
  return (
    <Layout>
      <Add setList={setList} list={list} />
      <List setList={setList} list={list} />
    </Layout>
  );
}

export default App;
