import Add from "./components/add";
import React from "react";
import List from "./components/list";
import PageLayout from "./components/page-layout";

function App() {
  /**
   * List of objects
   * Each object have the following form: { label: 'Hello World', id: 123123123 }
   */
  const [list, setList] = React.useState([]);
  return (
    <PageLayout>
      <Add setList={setList} list={list} />
      <List setList={setList} list={list} />
    </PageLayout>
  );
}

export default App;
