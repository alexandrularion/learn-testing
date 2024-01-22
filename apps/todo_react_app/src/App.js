import { Add } from "./components/Add";
import "./App.css";
import React from "react";
import { List } from "./components/List";

function App() {
  const [list, setList] = React.useState([]);
  return (
    <main>
      <div className="layout">
        <h1 className="heading">Todo React App</h1>
        <Add setList={setList} list={list} />
        <List setList={setList} list={list} />
      </div>
    </main>
  );
}

export default App;
