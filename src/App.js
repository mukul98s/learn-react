import "./index.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No tourse left</h2>
        <button onClick={fetchTours} className="btn">
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} setTours={setTours} />
    </main>
  );
}

export default App;
