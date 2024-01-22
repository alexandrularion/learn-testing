import { Add } from "./components/Add";
import { Card } from "./components/Card";
import "./App.css";
import React from "react";

function App() {
  const [list, setList] = React.useState([]);
  return (
    <main>
      <div className="layout">
        <Add setList={setList} />
        <section className="items">
          {list.map(({ text, id }, index) => (
            <Card key={index} text={text} id={id} setList={setList} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
