import "./index.css";
import Question from "./Question";
import data from "./data";

function App() {
  return (
    <main>
      <div className="section">
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {data.map((d) => {
              return <Question key={d.id} {...d} />;
            })}
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
