import data from "./data";
import "./index.css";
import React, { useState } from "react";
import List from "./List";

function App() {
  const [person, setPerson] = useState(data);

  const clearAllHandler = () => {
    setPerson([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{person.length} Birthday Today</h3>
        <List person={person} setPerson={setPerson} />
        <button onClick={clearAllHandler}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
