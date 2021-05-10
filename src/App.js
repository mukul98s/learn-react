import React, { useState } from "react";
import data from "./data";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);
    if (number <= 0) amount = 1;
    if (number > 8) amount = 8;

    setText(data.slice(0, amount));
  };
  return (
    <div className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="number">Paragraph</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>

      <main>
        {text.map((p) => {
          return <p>{p}</p>;
        })}
      </main>
    </div>
  );
}

export default App;
